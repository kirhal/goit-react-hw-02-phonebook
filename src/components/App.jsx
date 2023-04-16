import { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './phonebook/Section';
import AddContacts from './phonebook/AddContacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const nameValue = form.elements.name.value;
    const www = {
      name: nameValue,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, www],
    }));
    form.reset();
  };

  render() {
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
        <Section title="Contacts"></Section>
      </div>
    );
  }
}
