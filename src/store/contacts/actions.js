import { ADD_CONTACT, DELTE_CONTACT, SET_CONTACTS } from './types';

const setContactsAction = contacts => ({
  type: SET_CONTACTS,
  payload: contacts,
});
const addContactAction = newContact => ({
  type: ADD_CONTACT,
  payload: newContact,
});
const deleteContactAction = contactId => ({
  type: DELTE_CONTACT,
  payload: contactId,
});

export { setContactsAction, addContactAction, deleteContactAction };
