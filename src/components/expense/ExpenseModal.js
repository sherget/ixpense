import React, { Component } from 'react';
import styles from './Expense.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Header, List } from 'semantic-ui-react';
import Select from '../../helpers/forms/Select';
import InputText from '../../helpers/forms/InputText';
import InputCheckbox from '../../helpers/forms/InputCheckbox';

const url='https://localhost:3000/api';

const formTypeOptions = [
   { key: 'income', text: 'Income', value: 'income' },
   { key: 'expense', text: 'Expense', value: 'expense' },
];
const formKindOptions = [
   { key: 'single_expense', text: 'Single expense', value: 'single_expense' },
   { key: 'fixedcosts', text: 'Fixed costs', value: 'fixedcosts' },
   { key: 'income', text: 'Income', value: 'income' },
   { key: 'saving', text: 'Saving', value: 'saving' },
   { key: 'investment', text: 'Investment', value: 'investment' },
   { key: 'deposit', text: 'Deposit', value: 'deposit' },
   { key: 'refund', text: 'Refund', value: 'refund' },
];
const formCategoriesOptions = [];
const formIntervalOptions = [
   { key: 'monthly', text: 'Monthly', value: 'monthly' },
   { key: 'yearly', text: 'Yearly', value: 'yearly' },
   { key: 'weekly', text: 'Weekly', value: 'weekly' },
   { key: 'daily', text: 'Daily', value: 'daily' },
];
const formDayOfTransferOptions = [
   { key: '01', text: '01', value: '01' },
   { key: '02', text: '02', value: '02' },
   { key: '03', text: '03', value: '03' },
   { key: '04', text: '04', value: '04' },
   { key: '05', text: '05', value: '05' },
   { key: '06', text: '06', value: '06' },
   { key: '07', text: '07', value: '07' },
   { key: '08', text: '08', value: '08' },
   { key: '09', text: '09', value: '09' },
   { key: '10', text: '10', value: '10' },
   { key: '11', text: '11', value: '11' },
   { key: '12', text: '12', value: '12' },
   { key: '13', text: '13', value: '13' },
   { key: '14', text: '14', value: '14' },
   { key: '15', text: '15', value: '15' },
   { key: '16', text: '16', value: '16' },
   { key: '17', text: '17', value: '17' },
   { key: '18', text: '18', value: '18' },
   { key: '19', text: '19', value: '19' },
   { key: '20', text: '20', value: '20' },
   { key: '21', text: '21', value: '21' },
   { key: '22', text: '22', value: '22' },
   { key: '23', text: '23', value: '23' },
   { key: '24', text: '24', value: '24' },
   { key: '25', text: '25', value: '25' },
   { key: '26', text: '26', value: '26' },
   { key: '27', text: '27', value: '27' },
   { key: '28', text: '28', value: '28' },
   { key: '29', text: '29', value: '29' },
   { key: '30', text: '30', value: '30' },
   { key: '31', text: '31', value: '31' },
];


class ExpenseModal extends Component {

	constructor(props) {
		super(props);

		this.state = {
			show: false,
			loading: true,
			expense: null,
			formControls: {
				amount: {
					value: '',
				},
				description: {
					value: ''
				},
				type: {
					value: ''
				},
				kind: {
					value: ''
				},
				categories: {
					value: ''
				},
				recurring: {
					value: ''
				},
				interval: {
					value: ''
				},
				dayOfTransfer: {
					value: ''
				},
			}
		}
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
	}

    showModal = () => {
      this.setState({ show: true });
    };

    hideModal = () => {
      this.setState({ show: false });
    };

     onSubmit(e) {
        e.preventDefault();
        console.log(this);
    }

    async componentDidUpdate() {
      if (this.props.loggedIn && this.state.loading === true) {
        const response = await fetch(url + '/expenses/' + this.props.expenseId);
        const expense = await response.json();

        this.setState({
            isLoading: false,
            expense: expense
        });
      }
    }

    async saveExpense() {
      if (this.props.loggedIn) {
        if (this.props.expense.uuid && this.props.expense.uuid === this.props.uuid) {
//				const response = await fetch(url + '/expenses', {
				await fetch(url + '/expenses', {
						method: 'PATCH',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							amount: 69.00,
							description: "Amazon",
              type: "expense",
              kind: "fixed costs",
              categories: ""
						})
					});
        } else {
//				const response = await fetch(url + '/expenses', {
				await fetch(url + '/expenses', {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							uuid: 0,
							amount: 69.00,
							description: "Amazon",
              type: "expense",
              kind: "fixed costs",
              categories: ""
						})
					});
        }
//					const content = await response.json();

        this.forceUpdate();
      }
    }

    changeHandler = (e) => {
				const val = e.target.value;

        this.setState({
            ...this.state.formControls,
        });
    }

    handleDropdownChange(event, data) {
      console.log("DBG");

      console.log(data);
        this.setState({
            [data.name]: data.value
        });
    }

    render() {
      if (this.state.show) {
        return (
          <section id={styles.expenseModal} className={`${styles.editExpenseModal}`}>
            <form onChange={this.changeHandler}>
              <InputText label="Amount" id="expenseAmount" placeholder='9,99' />
              <InputText label="Description" id="expenseDescription" placeholder='Rent, Cheeseburger' />
              <Select
                    onChange={this.handleDropdownChange}
                    label="Type"
                    id="expenseType"
                    placeholder="Expense, income"
                    selection
                    options={formTypeOptions}
              />
              <Select
                    label="Kind"
                    id="expenseKind"
                    placeholder="Choose the kind of expense or income"
                    selection
                    options={formKindOptions}
              />
              <Select multiple="True" label="Categories" id="expenseCategories" placeholder={formCategoriesOptions.length > 0 ? "Categories" : "No Categories available"} options={formCategoriesOptions}/>
              <InputCheckbox label="Recurring?" id="expenseRecurring" />
              <Select label="Interval" id="expenseInterval" placeholder="Monthly" options={formIntervalOptions}/>
              <Select label="Day of Transfer each Month" id="expenseDayOfTransfer" placeholder="When does the transfer usually gets executed?" options={formDayOfTransferOptions}/>
            </form>
            <button onClick={this.onSubmit}>Save</button>
          </section>
        );
      } else {
        return null;
      }
    }
}

export default ExpenseModal;
