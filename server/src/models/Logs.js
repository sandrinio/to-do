const mongoose = require("mongoose");

const LogsSchema = new mongoose.Schema({
		body: {
				type: String
		},
		type: String,
		regDate: {type: Date, default: Date.now},
		author: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
		},
		before: String,
		after: String
})



module.exports = mongoose.model("Logs", LogsSchema);