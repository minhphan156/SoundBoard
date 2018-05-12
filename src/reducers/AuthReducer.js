import { EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    LOGIN_USER } from '../actions/type';

const INITIAL_STATE = { 
email: '', 
password: '', 
user: null, 
error:'',
loading: 'display',
loggedIn: false
};
export default (state = INITIAL_STATE, action) => {
   
    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER_SUCCESS:
            return{...state, ...INITIAL_STATE, loading: 'inside', user: action.payload};
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed.'};
        case LOGIN_USER:
            return {...state, error: ''};
        default:
            return state;
    }
};