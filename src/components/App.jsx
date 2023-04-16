import { Component } from 'react';

import Section from './phonebook/Section';

export class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <Section title="Phonebook"></Section>
        <Section title="Contacts"></Section>
      </div>
    );
  }
}
