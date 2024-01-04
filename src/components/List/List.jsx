import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

class List extends Component {
    render() {
        const { contacts, deleteContact } = this.props;

        return (
            <ul>
                {contacts.map(contact => (
                    <ListItem
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}
                    deleteContact={deleteContact} />
                ))}
            </ul>
        )
    }
}

export default List;