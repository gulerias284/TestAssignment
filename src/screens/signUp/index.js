import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import InputWithLabel from '../../components/InputWithLabel';
import { addUser } from '../../redux/actions';
import styles from './styles';

const initialState = {
    name: '',
    email: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
};

const SignUp = ({ navigation }) => {
    const dispatch=useDispatch()
    const [userDataState, setUserDataState] = useState(initialState);
    const [error, setError] = useState(initialState);
    const [secureText,setSecureText]=useState({
        password:true,
        confirmPassword:true
    })
    const [passwordStrength,setPasswordStrength]=useState("")
    const handleInputChange = (text, type) => {
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
        setUserDataState(prevData => ({ ...prevData, [type]: text }))
        switch (type) {
            case "name": {
                if (text === '') {
                    setError(prevError => ({ ...prevError, [type]: "Please enter your name." }))
                } else if (text.length < 2) {
                    setError(prevError => ({ ...prevError, [type]: "Please enter a valid name." }))
                } else {
                    setError(prevError => ({ ...prevError, [type]: "" }))
                }
            }
            break;
            case "email":{
                if (text === '') {
                    setError(prevError=>({...prevError,[type]:"Email field should not be empty."}))
                } else if (
                    !text.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                ) {
                    setError(prevError=>({...prevError,[type]:"Please enter valid email address."}))
                } else {
                    setError(prevError=>({...prevError,[type]:""}))
                }
            }
            break;
            case "mobileNo":{
                if(text === ""){
                    setError(prevError=>({...prevError,[type]:"Mobile No. field should not be empty."}))
                }else if(text.length!==10){
                    setError(prevError=>({...prevError,[type]:"Mobile No. should be of 10 numbers."}))
                }else{
                    setError(prevError=>({...prevError,[type]:""}))
                }
            }
            break;
            case "password":{
                if(text === ""){
                    setPasswordStrength("Poor")
                    setError(prevError=>({...prevError,[type]:"Password field should not be empty."}))
                }else if(strongPassword.test(text)){
                    setPasswordStrength("Strong")
                    setError(prevError=>({...prevError,[type]:""}))
                }else if(mediumPassword.test(text)){
                    setPasswordStrength("Medium")
                    setError(prevError=>({...prevError,[type]:"Password must : be 8 characters long, have atleast one capital and one small letter, have atleast one number value and one special character."}))
                }else{
                    setPasswordStrength("Poor")
                    setError(prevError=>({...prevError,[type]:"Password must : be 8 characters long, have atleast one capital and one small letter, have atleast one number value and one special character."}))
                }
            }
            break;
            case "confirmPassword":{
                if(userDataState.password === ""){
                    setError(prevError=>({...prevError,password:"Please enter password first."}))
                }else if(text === ""){
                    setError(prevError=>({...prevError,[type]:"Confirm Password field should not be empty."}))
                }else if(userDataState.password!==text){
                    setError(prevError=>({...prevError,[type]:"Password doesn't match with above entered password."}))
                }else{
                    setError(prevError=>({...prevError,[type]:""}))
                }
            }

        }
    };
    const handleSecureTextChange=(type)=>{

    setSecureText(prevState=>({...prevState,[type]:!prevState[type]}))

    }
    const checkDisable=()=>{
        let disableSubmit=false
        if(!(userDataState.name && userDataState.email && userDataState.mobileNo && userDataState.confirmPassword)){
            disableSubmit=true
        } else if(error.email || error.name || error.mobileNo || error.password || error.confirmPassword){
            disableSubmit=true
        }else {
            return disableSubmit
        }
        return disableSubmit
    }
    const onSignUp=()=>{
        dispatch(addUser(userDataState))
    }
    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.welcomeTextContainer}>
                    <Text style={styles.welcomeText}>REGISTER HERE !</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <InputWithLabel
                        label={'Name'}
                        placeholder={'Name'}
                        value={userDataState.name}
                        error={error.name}
                        onChangeText={handleInputChange}
                        type={"name"}
                        
                    />
                    <InputWithLabel
                        label={'Email'}
                        placeholder={'Email'}
                        value={userDataState.email}
                        error={error.email}
                        onChangeText={handleInputChange}
                        type={"email"}
                        autoCapitalize={false}
                    />
                    <InputWithLabel
                        label={'Mobile Number'}
                        placeholder={'Mobile Number'}
                        value={userDataState.mobileNo}
                        error={error.mobileNo}
                        onChangeText={handleInputChange}
                        type={"mobileNo"}
                        keyboardType={'number-pad'}
                    />
                    <InputWithLabel
                        label={'Password'}
                        placeholder={'Password'}
                        value={userDataState.password}
                        error={error.password}
                        onChangeText={handleInputChange}
                        type={"password"}
                        handleSecureTextChange={handleSecureTextChange}
                        secureTextEntry={secureText.password}
                    />
                   {passwordStrength!==""&& <View style={styles.passwordStrengthTextContainer}>
                   <Text style={styles.textStyle}>Password Strength :</Text>
                   <Text style={styles.textStyle}> {passwordStrength}</Text>
                       </View>}
                    <InputWithLabel
                        label={'Confirm Password'}
                        placeholder={'Re-enter Password'}
                        value={userDataState.confirmPassword}
                        error={error.confirmPassword}
                        onChangeText={handleInputChange}
                        type={"confirmPassword"}
                        handleSecureTextChange={handleSecureTextChange}
                        secureTextEntry={secureText.confirmPassword}
                    />
                    <TouchableOpacity
                      disabled={checkDisable()}
                      onPress={() => onSignUp()}
                    >
                        <View
                            style={[styles.submitButton,
                            { opacity:checkDisable()?0.7: 1 }]}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomTextContainer}>
                    <Text style={styles.bottomText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                        <Text style={styles.signUpText}> Log In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

export default SignUp;
