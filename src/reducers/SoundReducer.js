import {ADD_SOUND} from '../actions/type';

const INITIAL_STATE  = {
    sounds:""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ADD_SOUND:
        console.log('------------------------------------');
        console.log('------------------------------------');
        console.log("REDUCER");
        console.log('------------------------------------');
        console.log(action.payload);
        console.log('------------------------------------');
        return{...state, sounds: action.payload};
        default:
      return state;
    }
};