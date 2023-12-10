import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from './PhonebookList.styled';
import { useEffect } from 'react';
import { deleteContactAction, setContactsAction } from 'store/contacts/actions';

export const PhonebookList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('contacts'));
    localData && dispatch(setContactsAction(localData));
  }, [dispatch]);

  useEffect(() => {
    setTimeout(
      () => localStorage.setItem('contacts', JSON.stringify(contacts)),
      200
    );
  }, [contacts]);

  const deleteContact = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <ContactsList>
      {contacts
        .filter(el => {
          if (filter) {
            return (
              el.name.toLowerCase().includes(filter.toLowerCase()) ||
              el.number === filter
            );
          }
          return true;
        })
        .map(el => {
          return (
            <li key={el.id}>
              <span>
                {el.name}: {el.number}
              </span>
              <button onClick={() => deleteContact(el.id)}>Delete</button>
            </li>
          );
        })}
    </ContactsList>
  );
};
