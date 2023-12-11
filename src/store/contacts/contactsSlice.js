import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts(state, { payload }) {
      return payload;
    },
    addContact(state, { payload }) {
      state.push(payload);
    },
    deleteContact(state, { payload }) {
      return state.filter(el => el.id !== payload);
    },
  },
});

const contactsReducer = contactsSlice.reducer;
export default contactsReducer;

const {
  setContacts: setContactsAction,
  addContact: addContactAction,
  deleteContact: deleteContactAction,
} = contactsSlice.actions;
export { setContactsAction, addContactAction, deleteContactAction };
