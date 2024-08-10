import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

export default function ContactList({ phones, onDelete }) {
  return (
    <ul className={css.list}>
      {phones.map((phone) => (
        <li key={phone.id} className={css.listItem}>
          <Contact phone={phone} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};





