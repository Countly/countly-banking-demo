import { USER_DATA } from '../types/userTypes';


export const setUser = (user) => ({
  type: USER_DATA,
  payload: {
    user,
  },
});
