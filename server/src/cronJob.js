const CronJob = require('cron').CronJob;
const Todos = require('./models/Todos')
const moment = require('moment');
const mailer = require('./middleware/mailer')



module.exports = function (){
	const now = moment().format('YYYY-MM-DD h:mm')
	new CronJob('30 * * * * *', function() {
	    Todos.find({}, function (err, todoList) {
			if(err){
				console.log(err)
			}else{
				todoList.forEach(function (todo) {
					const reminder1 = moment(todo.deadline.date + ' ' + todo.deadline.time).subtract(15, 'minutes').format('YYYY-MM-DD h:mm')
					const reminder2 = moment(todo.deadline.date + ' ' + todo.deadline.time).subtract(5, 'minutes').format('YYYY-MM-DD h:mm')
					const deadline = moment(todo.deadline.date + ' ' + todo.deadline.time).format('YYYY-MM-DD h:mm')
					if(now === reminder1 || now === deadline){
							console.log(reminder1)
						const HelperOption = {
							from: "Todos",
							to: 'sandro.suladze@gmail.com',
							subject: `${todo.title}`,
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