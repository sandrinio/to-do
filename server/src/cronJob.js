const CronJob = require('cron').CronJob;
const Todos = require('./models/Todos')
const dateFormat = require('dateformat');
const now = new Date();
const moment = require('moment');

Todos.find({}, function (err, todoList) {
		if(err){
				console.log(err)
		}else{
				todoList.forEach(function (todo) {
						const deadline = moment(todo.deadline.date + ' ' + todo.deadline.time).format('YYYY-MM-DD HH:MM').subtract(2, 'months')
						console.log(deadline.subtract(2, 'months'))
						// console.log(moment().subtract(30, 'minutes'))
				})
				// if(deadline === dateFormat(now, 'yyyy-mm-dd HH:MM')){
				// 		console.log('hello')
				// }
				// const deadline = moment(Date.now())
				// console.log(deadline('2018', 'YYYY-MM-DD').format())
		}
})


module.exports = function (){

		new CronJob('30 * * * * *', function(msg) {

		}, null, true, 'America/Los_Angeles')

}