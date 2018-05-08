const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback');
const cronJob = require('./cronJob')
const mailer = require('./middleware/mailer')
//routes
const AuthRoutes    = require('./routes/Auth.js'),
		  ProjectRoutes = require('./routes/Projects'),
		  TodoRoutes    = require('./routes/Todos')


const app = express()

app.use(cors())
app.use(history())
app.use(serveStatic(__dirname + "/dist"));
// app.use(morgan('combined'))
app.use(bodyParser.json())

cronJob()

require('./passport')

//use routes
app.use(AuthRoutes)
app.use(ProjectRoutes)
app.use(TodoRoutes)

app.listen(config.port, () => {
		console.log(`Server is running on Port ${config.port}`)
})