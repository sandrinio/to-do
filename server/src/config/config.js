const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

module.exports = {
		port: process.env.PORT || 3000,
		db: mongoose.connect('mongodb://localhost/todo'),
		authentication: {
				jwtSecret: process.env.JWT_SECRET || 'secret'
		}
}