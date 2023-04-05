import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhoneBook, Title, } from './ContactForm/ContactForm.styled';

export class App extends Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  filteredContacts = () => { 
    const { filter, contacts } = this.state;
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalize))
  }

  addContact = ({ name, number }) => { 
    const check = this.checkName(name)
    if (check.length <= 0) { 
      const contact = {
        id: nanoid(),
        name,
        number
      };      
    this.setState(prevState => ({contacts: [contact, ...prevState.contacts ],}))
      return;
    }
    alert(`${name} is already in contacts`)    
  }
  
  checkName = name => {
    const { contacts } = this.state;
  return contacts.filter(contact => contact.name.includes(name))
  }

  onDelete = id => { 
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== id)}))
}
componentDidMount () {
  const contacts = localStorage.getItem('contacts');
  const parsedContactList = JSON.parse(contacts);
  if (parsedContactList) {
    this.setState({contacts: parsedContactList});
  }
  }

componentDidUpdate (prevProps, prevState) {
  
  if (this.state.contacts !== prevState.contacts ) {
    console.log ('update')
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
}
  render() {
    const visibleContscts = this.filteredContacts();
    return (
      <PhoneBook>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={ this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.filter} changeFilter={ this.changeFilter} />
        <ContactList onDelete={this.onDelete} contacts={visibleContscts} />        
      </PhoneBook>
    );
  }
};


