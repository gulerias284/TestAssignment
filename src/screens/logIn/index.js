import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import theme from '../../assets/constants';
import InputWithLabel from '../../components/InputWithLabel';
import styles from './styles';
import { onLogInUser } from '../../redux/actions'
import { useDispatch } from 'react-redux';

const initialState = {
    emailMobileNo: '',
    password: '',
};
const LogIn = ({ navigation }) => {
    const dispatch=useDispatch()
    const [userCredentialState, setUserCredentialState] = useState(initialState);
    const [error, setError] = useState(initialState);
    const [secureText,setSecureText]=useState(true)

    const handleInputChange = (text, type) => {
        console.log("USERR",text,type,userCredentialState,error)
        setUserCredentialState(prevState=>({...prevState,[type]:text}))
        switch (type) {
            case "emailMobileNo": {
                if (text === '') {
                    setError(prevError=>({...prevError,[type]:"Email / Mobile Number field should not be empty."}))
                }  else {
                    setError(prevError=>({...prevError,[type]:""}))
                }
            }
                break;
            case "password": {
                if (text === '') {
                    setError(prevError=>({...prevError,[type]:"Password field should not be empty."}))
                }  else {
                    setError(prevError=>({...prevError,[type]:""}))
                }
            }
        }

    }
    const checkDisable=()=>{
        let disableSubmit=false
        if(!(userCredentialState.emailMobileNo && userCredentialState.password)){
            disableSubmit=true
        } else if(error.emailMobileNo ||  error.password){
            disableSubmit=true
        }else {
            return disableSubmit
        }
        return disableSubmit
    }
    const onLogIn=()=>{
        dispatch(onLogInUser(userCredentialState))
    }
    const handleSecureTextChange=()=>{
        setSecureText(prevState=>!prevState)
    }
    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.welcomeTextContainer}>
                    <Text style={styles.welcomeText}>WELCOME</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <InputWithLabel
                        label={'Email / Mobile Number'}
                        placeholder={'Email or Mobile Number'}
                        value={userCredentialState.emailMobileNo}
                        error={error.emailMobileNo}
                        onChangeText={handleInputChange}
                        type={"emailMobileNo"}
                        autoCapitalize="none"
                    />
                    <InputWithLabel
                        label={'Password'}
                        placeholder={'Password'}
                        value={userCredentialState.password}
                        error={error.password}
                        onChangeText={handleInputChange}
                        type={"password"}
                        secureTextEntry={secureText}
                        handleSecureTextChange={handleSecureTextChange}
                    />
                    <TouchableOpacity>
                        <Text style={styles.textStyle}>Forget Password ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      disabled={checkDisable()}
                      onPress={() =>onLogIn() }
                    >
                        <View
                            style={[styles.submitButton,
                            { opacity:checkDisable()?0.7: 1 }]}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomTextContainer}>
                    <Text style={styles.bottomText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signUpText}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

export default LogIn;
