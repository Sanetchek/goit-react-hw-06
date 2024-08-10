import Contact from '../Contact/Contact'
import { useSelector } from "react-redux";
import css from './ContactList.module.css'

export default function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  const visibleContacts = () => {
    if (!selectNameFilter) {
      return selectContacts;
    }

    const normalizedFilter = selectNameFilter.toLowerCase();
    return selectContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul className={css.list}>
      {visibleContacts().map((phone) => (
        <li key={phone.id} className={css.listItem}>
          <Contact phone={phone} />
        </li>
      ))}
    </ul>
  );
};
