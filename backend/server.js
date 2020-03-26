require('dotenv').config()

const https = require('https')
const fs = require('fs')
const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const app = express()

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

const corsOptions = {
  origin: 'https://localhost:3000/api',
  optionsSuccessStatus: 200
}

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,  useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use(express.json())

const expensesRouter = require('./routes/expenses')
app.use('/api/expenses', expensesRouter)

const categoriesRouter = require('./routes/categories')
app.use('/api/categories', categoriesRouter)

https.createServer(options, app).listen(3000, () => {
    console.log('Server started');
});
