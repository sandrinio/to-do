const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

module.exports = {
		port: process.env.PORT || 3000,
		db: mongoose.connect('mongodb://localhost/todo'),
		authentication: {
				jwtSecret: process.env.JWT_SECRET || 'secret',
				clientId: '592445235913-dgckidiqnqscf54ghv0ve8f63io4uc2o.apps.googleusercontent.com',
				clientSecret: 'ySBeuZW3_biUmA_XQXcFl9T2'
		}
}