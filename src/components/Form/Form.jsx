import { useState } from 'react';
import styles from '../Form/Form.module.css';

const Form = ({ onSubmit }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleChange = event => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(name, number);
        setName('')
        setNumber('')
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <label>Name</label>
                    <input
                        type="text"
                        className={styles.formInput}
                        name='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={handleChange}
                        required />
                </li>
                <li className={styles.item}>
                    <label>Number</label>
                    <input
                        type="tel"
                        className={styles.formInput}
                        name='number'
                        placeholder='Enter phone number'
                        value={number}
                        onChange={handleChange}
                        required
                    />
                </li>
                <li>
                    <button type='submit'>Add Contact</button>
                </li>
            </ul>
        </form>
    )
}

export default Form;