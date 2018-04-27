const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
		title: {
				type: String
		},
		body: {
				type: String
		},
		regDate: String,
		deadline: {
				date: {type: String},
				time: {type: String}
		},
		status: Boolean
})



module.exports = mongoose.model("Todos", TodosSchema);