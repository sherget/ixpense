const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
  uuid: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: { // income, expense
    type: String,
    required: true
  },
  kind: { // investment, saving, monthly fixed costs, deposit, income, refund, single expense
    type: String,
    required: true
  },
  categories: { // insurance, entertainment, food, fuel, dividends, business income, business expense, uitilities cost
    type: String,
    required: false
  },
  recurring: {
    type: Boolean,
    required: false
  },
  interval: { // monthly, weekly, everys two weeks, daily, yearly, every two years, every three years
    type: String,
    required: false
  },
  dayOfTransfer: {
    type: Number,
    required: false
  }
})

module.exports = mongoose.model('Expense', expenseSchema)
