import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = contact => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, contact],
      };
    });
  };
  render() {
    const { addContact } = this;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact = {this.addContact}/>

        <h2>Contacts</h2>
        {/* <Filter />
        <ContactList /> */}
      </div>
    );
  }
}
