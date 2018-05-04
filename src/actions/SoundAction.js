import {ADD_SOUND, PLAY_SOUND} from './type';

export const addSound = (item) => {
    return {
        type: ADD_SOUND,
        payload: item
    };
};

