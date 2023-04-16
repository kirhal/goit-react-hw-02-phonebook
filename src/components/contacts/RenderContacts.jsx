import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Contacts.module.css';

export default function RenderContacts({ contacts }) {
  return (
    <ul className={css['contacts-list']}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css['contacts-list__item']}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
}

RenderContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
