const express = require('express')
const router = express.Router()
const Expense = require('../models/expense')

// Get all expenses by userid
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find()
    res.json(expenses)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

// Get one expense by expenseid
router.get('/:id', getExpense, async (req, res) => {
     res.send(res.expense)
})

// Create expense for userid
router.post('/', async (req, res) => {
  const expense = new Expense({
    uuid: req.body.uuid,
    description: req.body.description,
    amount: req.body.amount,
    type: req.body.type,
    kind: req.body.kind,
    categories: req.body.categories,
    recurring: req.body.recurring,
    interval: req.body.interval,
    dayOfTransfer: req.body.dayOfTransfer,
  })

  try {
    const newExpense = await expense.save()
    res.status(201).json(newExpense)
  } catch(err) {
    res.status(400).json({ message: err.message })
  }
})

// Update expense from expenseid
router.patch('/:id', getExpense, async (req, res) => {
  if (req.body.description != null) {
   res.expense.description = req.body.description
  }

  if (req.body.amount != null) {
   res.expense.amount = req.body.amount
  }

  if (req.body.type != null) {
   res.expense.type = req.body.type
  }

  if (req.body.kind != null) {
   res.expense.kind = req.body.kind
  }

  if (req.body.categories != null) {
   res.expense.categories = req.body.categories
  }

  try {
    const updatedExpense = await res.expense.save()
    res.json(updatedExpense)
  } catch(err) {
    res.status(400).json({ message: err.message })
  }
})

// Delete expense from userid
router.delete('/:id', getExpense, async (req, res) => {
  try {
    await res.expense.remove()
    res.json({ message: 'success'})
    const newExpense = await expense.save()
    res.status(201).json(newExpense)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

async function getExpense(req, res, next) {
  let expense
  try {
    expense = await Expense.findById(req.params.id)
    if (expense == null) {
      return res.status(404).json({ message:'Id not found' })
    }
  } catch (err) {
      return res.status(500).json({ message: err.message })
  }

  res.expense = expense
  next()
}

module.exports = router
