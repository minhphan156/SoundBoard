import {ADD_SOUND} from '../actions/type';

const INITIAL_STATE  = {
    sounds:[]
}

export default (state = [], action) => {
    switch (action.type){
        case ADD_SOUND:
        return[...state, action.payload];
        default:
      return state;
    }
};