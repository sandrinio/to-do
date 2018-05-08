const CronJob = require('cron').CronJob;
const Todos = require('./models/Todos')
const dateFormat = require('dateformat');
const now = new Date();
const moment = require('moment');
const mailer = require('./middleware/mailer')



module.exports = function (){
	new CronJob('10 * * * * *', function(msg) {
		Todos.find({}, function (err, todoList) {
			if(err){
				console.log(err)
			}else{
				
				todoList.forEach(function (todo) {
					const deadline = moment(todo.deadline.date + ' ' + todo.deadline.time).add(20, 'minutes').format('YYYY-MM-DD h:mm')
					console.log(deadline)
					if(moment().format('YYYY-MM-DD h:mm') === deadline){
						const HelperOption = {
							from: "'Geohub ' <g.hub@geohub.ge>",
							to: 'sandro.suladze@gmail.com',
							subject: `Todo! ${todo.title}`,
							html:`${todo.body}`
					 }
					  mailer.transporter.sendMail(HelperOption, function (error, info) {
					    if(error) return console.log(error)
					    console.log(info)
					 });
					}
				})
			}
		})
	}, null, true, 'America/Los_Angeles')

}