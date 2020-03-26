const express = require('express')
const router = express.Router()
const Categorie = require('../models/categorie')

// Get all expenses by userid
router.get('/', async (req, res) => {
  try {
    const categories = await Categorie.find()
    res.json(categories)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

// Get one expense by expenseid
router.get('/:id', getCategorie, async (req, res) => {
     res.send(res.categorie)
})

// Create expense for userid
router.post('/', async (req, res) => {
  const categorie = new Categorie({
    uuid: req.body.uuid,
    name: req.body.name,
  })

  try {
    const newCategorie = await categorie.save()
    res.status(201).json(newCategorie)
  } catch(err) {
    res.status(400).json({ message: err.message })
  }
})

// Update expense from expenseid
router.patch('/:id', getCategorie, async (req, res) => {
  if (req.body.name != null) {
   res.categorie.name = req.body.name
  }

  try {
    const updatedCategorie = await res.categorie.save()
    res.json(updatedCategorie)
  } catch(err) {
    res.status(400).json({ message: err.message })
  }
})

// Delete expense from userid
router.delete('/:id', getCategorie, async (req, res) => {
  try {
    await res.categorie.remove()
    res.json({ message: 'success'})
    const newCategorie = await categorie.save()
    res.status(201).json(newCategorie)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

async function getCategorie(req, res, next) {
  let categorie
  try {
    categorie = await Categorie.findById(req.params.id)
    if (categorie == null) {
      return res.status(404).json({ message:'Id not found' })
    }
  } catch (err) {
      return res.status(500).json({ message: err.message })
  }

  res.categorie = categorie
  next()
}

module.exports = router
