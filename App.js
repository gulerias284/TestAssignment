import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/routes';
import { StatusBar, SafeAreaView } from 'react-native'
import theme from './src/assets/constants';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
   <Provider store={store}>
      <NavigationContainer>
      <SafeAreaView style={{flex:1,marginTop:StatusBar.currentHeight}}>
      <StatusBar translucent backgroundColor={theme.colors.primary}  barStyle="default"/>
       <RootStack/>
      </SafeAreaView>
    </NavigationContainer>
   </Provider>
  )
}

export default App
