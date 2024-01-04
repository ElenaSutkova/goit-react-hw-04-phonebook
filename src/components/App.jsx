import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import List from '../components/List/List'
import Form from '../components/Form/Form'
import Filter from '../components/Filter/Filter'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const addContacts = localStorage.getItem('contacts');
    const addFilter = localStorage.getItem('filter');
    
    if (addContacts) {
      this.setState({contacts: JSON.parse(addContacts)})
    }
    if (addFilter) {
      this.setState({filter: JSON.parse(addFilter)})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    if (prevState.filter !== this.state.filter) {
      localStorage.setItem('filter', JSON.stringify(this.state.filter));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const isNameExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      alert(`${name} is already in contacts!`)
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
    
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <List contacts={filterContacts} deleteContact={this.deleteContact}/>
      </div>
    )
  }
}

export default App;