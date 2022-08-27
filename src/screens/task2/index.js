import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './styles'
import { useDispatch } from 'react-redux';
import { onLogOutUser } from '../../redux/actions'
const Task2 = () => {
    const dispatch=useDispatch()
    const logInUser = useSelector((state) => state?.loginUser)
    const [buttons, setButtons] = useState([])
    const onPressGenerateButton = () => {
        setButtons(prevState => [...prevState, {
            id: 'id' + new Date().getTime(),
        }])
    }
    const onPressGeneratedButton =(id)=>{
        console.log(buttons.filter(button=>button.id!==id))
        setButtons(prevState=>prevState?.filter(button=>button.id!==id))
    }
    const onPressLogOut=()=>{
        dispatch(onLogOutUser())
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topTextContainer}>
                <Text style={styles.welcomeTextStyle}>Welcome </Text>
                <Text style={styles.nameText}>{logInUser?.name}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', }}>
                <TouchableOpacity style={styles.generateButtonStyle} onPress={() => onPressGenerateButton()}>
                    <Text style={styles.generateButtonText}>Generate Button</Text>
                </TouchableOpacity>
                <FlatList
                    data={buttons}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.generatedButton} onPress={()=>onPressGeneratedButton(item?.id)}>
                                <Text style={styles.generatedButtonText}>Press To Delete</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
            <TouchableOpacity style={styles.generateButtonStyle} onPress={() => onPressLogOut()}>
                    <Text style={styles.generateButtonText}>Log Out</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Task2
