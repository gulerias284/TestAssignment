import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_USER, GET_USER_LIST, ON_LOGIN_USER, ON_LOGOUT_USER } from './constants';

export const addUser = user => async dispatch => {
  let userList = [];
  try {
    let list = await AsyncStorage.getItem(GET_USER_LIST);
    userList = list ? JSON.parse(list) : [];

    if (
      !userList?.filter(
        registeredUser =>
          user?.email === registeredUser?.email ||
          user?.mobileNo === registeredUser?.mobileNo,
      )?.length
    ) {
      userList = [{ id: 'id' + new Date().getTime(), ...user }, ...userList];
      await AsyncStorage.setItem(GET_USER_LIST, JSON.stringify(userList));
      return dispatch({
        type: ADD_USER,
        payload: userList,
      });
    } else {
      alert('User already registered with same email or mobile No.');
    }
  } catch (error) {
    return dispatch({ type: GET_USER_LIST, payload: userList });
  }
};
export const onLogInUser = logInUser => async dispatch => {
  let userList = [];
  try {
    let list = await AsyncStorage.getItem(GET_USER_LIST);
    userList = list ? JSON.parse(list) : [];
    let user = userList?.filter(registeredUser => {
      return logInUser?.emailMobileNo?.toLowerCase() ===
        registeredUser?.email?.toLowerCase() || logInUser?.emailMobileNo?.toLowerCase() === registeredUser?.mobileNo;
    });
    if (user?.length) {
      if (user[0]?.password === logInUser?.password) {
        return dispatch({
          type: ON_LOGIN_USER,
          payload: user[0],
        });
      }else{
        alert('Incorrect email or password.');
        return dispatch({
          type: ON_LOGIN_USER,
          payload: null,
        });
      }
    } else {
      alert('Registered user not found.');
      return dispatch({
        type: ON_LOGIN_USER,
        payload: null,
      });
    }

  } catch (error) {
    alert('LogIn Failed.');
    return dispatch({
      type: ON_LOGIN_USER,
      payload: null,
    });
  }

};
export const onLogOutUser = () => dispatch=> {
  return dispatch({
    type: ON_LOGOUT_USER,
    payload: null,
  })
}