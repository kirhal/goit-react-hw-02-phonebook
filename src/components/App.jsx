import { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './section/Section';
import AddContacts from './phonebook/AddContacts';
import RenderContacts from './contacts/RenderContacts';
import FilterContacts from './filter/FilterContacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;
    const currentSubmit = {
      name: nameValue,
      number: numberValue,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, currentSubmit],
    }));
    form.reset();
  };

  filterContacts = evt => {};

  render() {
    const { contacts, filter } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <Section title="Phonebook">
          <AddContacts addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <FilterContacts />
          {contacts.lenght !== 0 && <RenderContacts contacts={contacts} />}
        </Section>
      </div>
    );
  }
}
