import css from '../components/App.module.css';

import { Section } from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';

import { ThreeCircles } from 'react-loader-spinner';

export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ThreeCircles
          display="block"
          height="30"
          width="30"
          color="#367af6"
          wrapperStyle={{}}
          wrapperClass="spinnerWrapper"
          visible={isLoading}
          ariaLabel="three-circles-rotating"
        />
        <ContactList />
      </Section>
    </div>
  );
}
