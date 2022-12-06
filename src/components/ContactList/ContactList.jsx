import React from 'react';
import css from '../ContactList/ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const deleteContactByClick = event => {
    dispatch(deleteContact(event.target.id));
  };

  const filterContactListByQuery = () => {
    if (filter && contacts) {
      return contacts.filter(contact =>
        contact.name.toUpperCase().includes(filter.toUpperCase())
      );
    }
    return contacts;
  };

  const filteredList = filterContactListByQuery();

  return (
    <ul className="contactList">
      {filteredList.length > 0 &&
        filteredList.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <p className={css.item__text}>
              {name}: {number}
            </p>
            <button id={id} onClick={deleteContactByClick}>
              delete
            </button>
          </li>
        ))}
    </ul>
  );
};
