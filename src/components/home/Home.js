import React, { Component } from 'react';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
    render() {
        return (
            <section className={styles.intro}>
                <h2>Free, Simple, Anonymized</h2>
                <p>
                    No need to sync your whole bank data anymore.
                    Fully anonymized, no personal data will be saved.
                    Set up once and enjoy a structured, automated tracking experience.
                </p>
            </section>
        );
    }
}

export default Home;
