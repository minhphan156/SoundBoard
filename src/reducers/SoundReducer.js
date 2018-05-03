import {ADD_SOUND} from '../actions/type';

const INITIAL_STATE  = {
    sounds:{}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ADD_SOUND:
        return{...state, sounds: action.payload};
        default:
      return state;
    }
};