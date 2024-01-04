import React, { Component } from 'react';
import styles from '../Filter/Filter.module.css';

class Filter extends Component {
    render() {
        const { value, onChange } = this.props;

        return (
            <label className={styles.label}>
                Find contacts by name:
                <input
                    type="text"
                    className={styles.input}
                    value={value}
                onChange={onChange}/>
            </label>
        )
    }
}

export default Filter;