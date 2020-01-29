import { UPDATE_PAGE_LOCATION } from '../types/generalTypes.js';

const initialState = {
    pageLocation : "home"
};

export default function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_PAGE_LOCATION:
      return {...state , pageLocation : payload.pageLocation} ;
    default:
      return state;
  }
}
