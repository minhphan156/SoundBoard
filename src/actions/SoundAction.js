import {ADD_SOUND} from './type';

export const addSound = (title) => {
    return {
        type: ADD_SOUND,
        payload: title
    };
};

