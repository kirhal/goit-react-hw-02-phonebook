import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export default function RenderContacts({ contacts, filter, deleteContact }) {
  return (
    <ul className={css['contacts-list']}>
      {filter
        ? mapContacts(filterContacts(contacts, filter), deleteContact)
        : mapContacts(contacts, deleteContact)}
    </ul>
  );
}

function filterContacts(contacts, filter) {
  return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
}

function mapContacts(contacts, func) {
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={css['contacts-list__item']}>
        <span className={css['contacts-list__data']}>
          {name}: {number}
          <button
            type="button"
            className={css['contacts-list__button']}
            id={id}
            onClick={func}
          >
            Delete
          </button>
        </span>
      </li>
    );
  });
}

RenderContacts.propTypes = {
  filter: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
