import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
 } from './type';

 // M6.6
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

// M6.7
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

// M6.8
export const loginUser = ({ email, password}) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => loginUserSuccess(dispatch,user))
        .catch((error) => {
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user => loginUserSuccess(dispatch,user))
                .catch(() => loginUserFail(dispatch));
        });
    };
};

// M6.9
const loginUserFail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL})
};

// M6.10
const loginUserSuccess = (dispatch, user) => {
    dispatch({type: LOGIN_USER_SUCCESS, payload: user}); 
};
