import {ADD_SOUND} from '../actions/type';

const INITIAL_STATE  = {
<<<<<<< HEAD
    sounds:"initial state"
=======
    sounds:""
>>>>>>> playPauseFeature
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ADD_SOUND:
        return{...state, sounds: action.payload};
        default:
      return state;
    }
};