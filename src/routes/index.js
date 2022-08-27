
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/signUp';
import LogIn from '../screens/logIn';
import Task2 from '../screens/task2';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();
const RootStack = () => {
    const user=useSelector((state)=>state?.loginUser)
    console.log("User",user)
    return (
        <Stack.Navigator >
          { !user? <>
            <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false}} />
          </>:
            <Stack.Screen name="Task2" component={Task2} options={{ headerShown: false}}/>}
        </Stack.Navigator>
    )
}

export default RootStack
