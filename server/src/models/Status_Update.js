const mongoose = require("mongoose");

const Status_UpdateSchema = new mongoose.Schema({
		body: {
				type: String,
				required: true
		},
		regDate: String
})

module.exports = mongoose.model("Status_Update", Status_UpdateSchema);