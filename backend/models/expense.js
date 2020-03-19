const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
  userid: {
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
  kind: { // investment, saving, fixed costs,
    type: String,
    required: true
  },
  categories: { // insurance, entertainment, food, fuel, dividends, business income, business expensejjkkjjjkjj
    type: String,
    required: false
  },
})

module.exports = mongoose.model('Expense', expenseSchema)
