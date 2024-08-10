import { useEffect, useState } from 'react'
import './App.module.css'

import phones from '../../phones.json'

import ContactForm from '../ContactForm/ContactForm'
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";


function App() {
  const [searchName, setSearchName] = useState('')
  const [phoneInfo, setPhoneInfo] = useState(() => {
    const localBooks = localStorage.getItem('phone-books')
    if (localBooks) {
      return JSON.parse(localBooks);
    }
    return phones;
  });

  const handleSubmit = (newPhoneInfo) => {
    setPhoneInfo((prevPhoneInfo) => {
      const result = [...prevPhoneInfo, newPhoneInfo];
      localStorage.setItem('phone-books', JSON.stringify(result));
      return result;
    })
  }

  const handleDelete = (phoneId) => {
    setPhoneInfo(prevPhoneInfo => {
      const result = prevPhoneInfo.filter(({ id }) => id !== phoneId);
      localStorage.setItem("phone-books", JSON.stringify(result));
      return result;
    })
  }

  const visiblePhones = phoneInfo.filter((phone) =>
    phone.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={handleSubmit} />
      <SearchBox onSearch={setSearchName} />
      <ContactList phones={visiblePhones} onDelete={handleDelete} />
    </div>
  );
}

export default App

















