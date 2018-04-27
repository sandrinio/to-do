const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
		projectName: {
				type: String,
				index: true
		},
		regDate: String,
		author: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
		},
		phase: String,
		status: String,
		startDate: String,
		finishDate: String,
		statusUpdate: [{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Status_Update'
			}],
		todos: [{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Todos'
		}]
})



module.exports = mongoose.model("Project", ProjectSchema);