const express = require('express')
const budget = require('./models/budget')

const app = express()

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs', {
        allBudget: budget,
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})