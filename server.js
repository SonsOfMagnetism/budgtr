const express = require('express')
const budget = require('./models/budget')
const PORT = 3000

const app = express()

app.use('/static', express.static('public'))

// Index
app.get('/', (req, res) => {
    res.render('index.ejs', {
        allBudget: budget,
    })
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