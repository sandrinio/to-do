const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const config = require('../config/config')

const UserSchema = new mongoose.Schema({
		username: {
				type: String
		},
		name: String,
		surname: String,
		regDate: {type: Date, default: Date.now},
		permission: String,
		password: String
});

const user = module.exports = mongoose.model("User", UserSchema);
module.exports.createUser = function (newUser, cb) {
		const saltRounds = 10
		const salt = bcrypt.genSaltSync(saltRounds);
		newUser.password  = bcrypt.hashSync(newUser.password, salt);

		newUser.save(cb)
}

// module.exports.comparePassword = function (password, realPass) {
// 				return bcrypt.compareSync(password, realPass)
// 		}
