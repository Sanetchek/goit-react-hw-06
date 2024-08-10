import css from './App.module.css'

import ContactForm from '../ContactForm/ContactForm'
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";


function App() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <div className={css.wrap}>
        <ContactForm />
        <SearchBox/>
      </div>
      <ContactList />
    </div>
  );
}

export default App

















