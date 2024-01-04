import styles from '../Filter/Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <label className={styles.label}>
            Find contacts by name: 
            <input
                type="text"
                className={styles.input}
                value={value}
                onChange={onChange} />
        </label>
    )
}

export default Filter;