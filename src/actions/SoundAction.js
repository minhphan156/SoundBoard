import {ADD_SOUND} from './type';

export const addSound = (title) => {
    console.log('------------------------------------');
    console.log(title);
    console.log('------------------------------------');
    return {
        type: ADD_SOUND,
        payload: title
    };
};

