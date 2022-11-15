const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const budget = require('./models/budget')

const PORT = 3000

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/static', express.static('public'))

// Index
app.get('/', (req, res) => {
    res.render('index.ejs', {
        allBudget: budget,
    })
})

// New
app.get('/budget/new', (req, res) => {
    res.render('new.ejs')
})

// Create
app.post('/', (req, res) => {
    budget.push(req.body)
    res.redirect("/")
})

// Show
app.get('/budget/:id', (req, res) => {
    res.render('show.ejs', {
        budget: budget[req.params.id]
    })
})







app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})