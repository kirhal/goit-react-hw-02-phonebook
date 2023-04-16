import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';

export default function AddContacts() {
  const nameId = nanoid();
  return (
    <form className={css.form} onSubmit="">
      <label htmlFor={nameId} className={css['form-label']}>
        Name
      </label>
      <input
        type="text"
        name="name"
        id={nameId}
        className={css['form-input']}
      />
      <button type="submit" className={css['form-button']}>
        Add contact
      </button>
    </form>
  );
}

// AddContacts.propTypes = { title: PropTypes.string.isRequired };
