const express = require('express')
const app = express()
const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
  routesReport.print()
})

const userRoutes = require('./routes/userRoutes')
const cocktailRoutes = require('./routes/cocktailRoutes')
const addedCocktailRoutes = require('./routes/addedCocktailRoutes')
app.use('/users', userRoutes)
app.use('/cocktails', cocktailRoutes)
app.use('/addedCocktails', addedCocktailRoutes)