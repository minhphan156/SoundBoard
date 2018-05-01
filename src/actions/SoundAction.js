import {ADD_SOUND, PLAY_SOUND} from './type';

export const addSound = (title) => {
    console.log('------------------------------------');
    console.log("addSound action ");
    console.log(title);
    console.log('------------------------------------');
    return {
        type: ADD_SOUND,
        payload: title
    };
};

