import initialState from './initialState';
import { ADD_CONTACT, DELTE_CONTACT, SET_CONTACTS } from './types';

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CONTACTS:
      return { ...state, contacts: payload };
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, payload] };
    case DELTE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== payload),
      };
    default:
      return state;
  }
};

export default contactsReducer;
