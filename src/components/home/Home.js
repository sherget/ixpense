import React, { Component } from 'react';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExpenseModal from './../expense/ExpenseModal';

const url='https://localhost:3000/api';
const uuid = 0;

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      expenses: null
    }
  }

    async componentDidUpdate() {
      if (this.props.loggedIn && this.state.loading === true) {
        const response = await fetch(url + '/expenses?uuid=' + uuid);
        const expenses = await response.json();


        this.setState({
            isLoading: false,
            expenses: expenses
        });
      }
    }

    expenseModalRef = ({showModal}) => {
        this.showModal = showModal
    }

    onExpenseClick = () => {
      // open edit modal
      this.showModal();
    }


    render() {
        return (
          <section className={`${styles.content}${this.props.loggedIn ? " authorized" : ""}`}>

            <ExpenseModal uuid={this.uuid} expense={this.state.expenses} ref={this.expenseModalRef}></ExpenseModal>

            { this.props.loggedIn ? (
              <div>
                {this.state.isLoading || !this.state.expenses ? (
                    <div>Loading...</div>
                ) : (
                  <div id={styles.expenseList}>
                  {this.state.expenses.map((data, id) => {
                      return (
                        <div key={id} className={`${styles.expenseContainer} ${styles[data.type]} ${styles.row}`}>
                            <div className={`${styles.description} ${styles.column}`}>{data.description}</div>
                            <div className={`${styles.amount} ${styles.column} ${styles[data.type]}`}>{data.type === 'expense' ? '-' : '+'}{data.amount}€</div>
                            <div className={`${styles.kinds} ${styles.row}`}>{data.kind}</div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <button onClick={this.onExpenseClick}>+</button>
              </div>
            ) : (
              <section className={styles.intro}>
                  <h2>Free, Simple, Anonymized</h2>
                  <p>
                      No need to sync your whole bank data anymore.
                      Fully anonymized, no personal data will be saved.
                      Set up once and enjoy a structured, automated tracking experience.
                  </p>
              </section>
            )}
          </section>
        );
    }
}

export default Home;
