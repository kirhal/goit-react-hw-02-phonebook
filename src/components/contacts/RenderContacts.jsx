import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Contacts.module.css';

export default function RenderContacts({ contacts, filter }) {
  return (
    <ul className={css['contacts-list']}>
      {filter
        ? mapContacts(filterContacts(contacts, filter))
        : mapContacts(contacts)}
    </ul>
  );
}

function filterContacts(contacts, filter) {
  return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
}

function mapContacts(contacts) {
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={css['contacts-list__item']}>
        {name}: {number}
      </li>
    );
  });
}

RenderContacts.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
