import styles from '../ListItem/ListItem.module.css'

const ListItem = ({ name, number, id, onDeleteContact }) => {
    const handleClick = () => {
        onDeleteContact(id);
    }

    return (
        <li className={styles.item}>
            <p>{name}: {number}</p>
            <button
                className={styles.button}
                onClick={handleClick}>
                Delete
                </button>
        </li>
    )
}

export default ListItem;