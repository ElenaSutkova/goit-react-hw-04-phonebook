import React, { useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import List from '../components/List/List'
import Form from '../components/Form/Form'
import Filter from '../components/Filter/Filter'

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const savedFilter = JSON.parse(localStorage.getItem('filter')) || '';

    setContacts(savedContacts);
    setFilter(savedFilter);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filter))
  }, [filter]);

  const addContact = (name, number) => {
    const isNameExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      alert(`${name} is already in contacts!`);
      return;
    };

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([...contacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId))
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  };

  const filteredContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <List contacts={filteredContact} onDeleteContact={deleteContact} />
    </div>
  )
}

export default App;