import React from 'react';
import css from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from 'components/Input/Input';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import { addContact } from '../../redux/operations';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const formSubmitHandler = data => {
    const inContacts = contacts.find(contact => contact.name === data.name);
    if (inContacts) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(data));
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    const newContact = { name, number, id: nanoid(10) };

    formSubmitHandler(newContact);

    reset();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        type="text"
        label="name"
        name="name"
        value={name}
        onChange={handleInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <Input
        type="tel"
        label="number"
        name="number"
        value={number}
        onChange={handleInputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <button type="submit" className={css.form__btn}>
        Add contact
      </button>
    </form>
  );
}
