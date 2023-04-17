import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Section from './section/Section';
import AddContacts from './phonebook/AddContacts';
import RenderContacts from './contacts/RenderContacts';
import FilterContacts from './filter/FilterContacts';

Notify.init({
  fontSize: '20px',
  width: '400px',
  position: 'top-center',
});

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Kiki Di', number: '333-91-26' },
      { id: 'id-6', name: 'Liz Orlan', number: '256-34-85' },
    ],
    filter: '',
  };

  addContact = evt => {
    evt.preventDefault();
    const contacts = this.state.contacts;
    const form = evt.currentTarget;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;
    const currentSubmit = {
      name: nameValue,
      number: numberValue,
      id: nanoid(),
    };
    if (this.checkOriginalNames(contacts, nameValue)) {
      Notify.failure('❌ This contact already in');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, currentSubmit],
      }));
    }
    form.reset();
  };

  onFilterChange = evt => {
    const filterValue = evt.currentTarget.value.toLowerCase();
    this.setState({ filter: filterValue.trim() });
  };

  checkOriginalNames = (contacts, contact) => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === contact.toLowerCase()
    );
  };

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
          {contacts.length !== 0 && (
            <>
              <FilterContacts
                changeFilter={this.onFilterChange}
                value={filter}
              />
              <RenderContacts contacts={contacts} filter={filter} />
            </>
          )}
        </Section>
      </div>
    );
  }
}
