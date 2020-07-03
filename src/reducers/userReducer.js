import { USER_DATA } from '../types/userTypes';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_DATA:
      return { ...state, user: payload.user };
    default:
      return state;
  }
};
export default userReducer;
