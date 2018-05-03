import {ADD_SOUND, PLAY_SOUND} from './type';

export const addSound = (item) => {
    console.log('------------------------------------');
    console.log("addSound action ");
    console.log(item);
    console.log('------------------------------------');
    return {
        type: ADD_SOUND,
        payload: item
    };
};

