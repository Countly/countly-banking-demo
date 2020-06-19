import {  USER_DATA } from '../types/userTypes';


export const setUser = (user) => {
    return {
        type : USER_DATA,
        payload : {
            user
        }
    }
}


