import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

export default function FilterContacts({ changeFilter, value }) {
  const findId = nanoid();
  return (
    <div className={css.filter}>
      {/* <label htmlFor={findId} className={css[['filter-label']]}></label> */}
      <input
        value={value}
        onChange={changeFilter}
        type="text"
        name="filter"
        id={findId}
        className={css['filter-input']}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Find contacts by name"
      />
    </div>
  );
}

FilterContacts.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  value: PropTypes.string,
};
