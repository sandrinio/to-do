const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback');
//routes
const AuthRoutes = require('./routes/Auth.js')

const app = express()

app.use(cors())
app.use(history())
app.use(serveStatic(__dirname + "/dist"));
// app.use(morgan('combined'))
app.use(bodyParser.json())

require('./passport')

//use routes
app.use(AuthRoutes)

app.listen(config.port, () => {
		console.log(`Server is running on Port ${config.port}`)
})