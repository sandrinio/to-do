const CronJob = require('cron').CronJob;
const Todos = require('./models/Todos')
const dateFormat = require('dateformat');
const now = new Date();
const moment = require('moment');



module.exports = function (){
	new CronJob('30 * * * * *', function(msg) {
		Todos.find({}, function (err, todoList) {
			if(err){
				console.log(err)
			}else{
				todoList.forEach(function (todo) {
					const deadline = moment(todo.deadline.date + ' ' + todo.deadline.time).add(20, 'minutes').format('YYYY-MM-DD h:m')
					if(moment().format('YYYY-MM-DD h:m') === deadline){
						console.log('DAEMTXVA')
					}
				})
			}
		})
	}, null, true, 'America/Los_Angeles')

}