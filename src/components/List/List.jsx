import ListItem from '../ListItem/ListItem';

const List = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <ListItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onDeleteContact={onDeleteContact}
                />
            ))}
        </ul>
    )
}

export default List;