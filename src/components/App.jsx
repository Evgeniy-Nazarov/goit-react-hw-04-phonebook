import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhoneBook, Title } from './ContactForm/ContactForm.styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  const addContact = ({ name, number }) => {
    const check = checkName(name);
    if (check.length <= 0) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevContacts => [contact, ...prevContacts]);
      return;
    }
    alert(`${name} is already in contacts`);
  };

  const checkName = name => {
    return contacts.filter(contact => contact.name.includes(name));
  };

  const onDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContactList = JSON.parse(contacts);
    if (parsedContactList) {
      setContacts(parsedContactList);
    }
  }, []);

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const visibleContscts = filteredContacts();
  return (
    <PhoneBook>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} changeFilter={changeFilter} />
      <ContactList onDelete={onDelete} contacts={visibleContscts} />
    </PhoneBook>
  );
};
