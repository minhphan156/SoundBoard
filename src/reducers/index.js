import { combineReducers } from 'redux';
import SoundReducer from './SoundReducer';

export default combineReducers({
    soundData: SoundReducer
    //{soundData: {sound: value}}
})