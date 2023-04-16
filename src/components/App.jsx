import { Component } from 'react';

import Section from './phonebook/Section';
import AddContacts from './phonebook/AddContacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
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
          <AddContacts />
        </Section>
        <Section title="Contacts"></Section>
      </div>
    );
  }
}
