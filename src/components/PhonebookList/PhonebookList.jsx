import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from './PhonebookList.styled';
import { getContactsSelector, getFilterSelector } from 'store/selectors';
import { deleteContactAction } from 'store/contactsSlice';

export const PhonebookList = () => {
  const contacts = useSelector(getContactsSelector);
  const filter = useSelector(getFilterSelector);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <ContactsList>
      {contacts
        .filter(({ name, number }) => {
          if (filter) {
            return (
              name.toLowerCase().includes(filter.toLowerCase()) ||
              number.includes(filter)
            );
          }
          return true;
        })
        .map(({ id, name, number }) => {
          return (
            <li key={id}>
              <span>
                {name}: {number}
              </span>
              <button onClick={() => deleteContact(id)}>Delete</button>
            </li>
          );
        })}
    </ContactsList>
  );
};
