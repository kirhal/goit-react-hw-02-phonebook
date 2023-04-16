import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Contacts.module.css';

export default function RenderContacts({ contacts, filter }) {
  // console.log('render filter', filter);
  return (
    <ul className={css['contacts-list']}>
      {filter ? filterContacts(contacts, filter) : originalContacts(contacts)}
    </ul>
  );
}

function filterContacts(contacts, filter) {
  console.log(filter);
  const filteredArr = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  console.log(filteredArr);
  return filteredArr.map(({ id, name, number }) => {
    return (
      <li key={id} className={css['contacts-list__item']}>
        {name}: {number}
      </li>
    );
  });
}
function originalContacts(contacts) {
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
// export default function RenderContacts({ contacts, filter }) {
//   return (
//     <ul className={css['contacts-list']}>
//       {/* {filter ? } */}
//       {contacts.map(({ id, name, number }) => {
//         return (
//           <li key={id} className={css['contacts-list__item']}>
//             {name}: {number}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
