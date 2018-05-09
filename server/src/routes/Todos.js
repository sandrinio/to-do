const express = require('express')
const router =  express.Router()
const dateFormat = require('dateformat');
const now = new Date();
const Todos = require('../models/Todos')
const Project = require('../models/Project')
const Logs = require('../models/Logs')




router.post('/newTask', (req, res) => {
		const newTodo = {
				title: req.body.title,
				body: req.body.body,
				status: req.body.status,
				deadline: {
						date: req.body.deadline.date,
						time: req.body.deadline.time
				},
				regDate: dateFormat(now, 'yyyy-mm-dd')
		}
		newTodo.deadline.date = dateFormat(req.body.deadline.date, 'yyyy-mm-dd')
		Project.findById(req.body.projectId, function (err, proje) {
				if(err) return res.send({error: 'Something Went Wrong project'})
				Todos.create(newTodo, function (err, newTask) {
						if(err) return res.send({error: 'Something Went Wrong todos'})
						proje.todos.push(newTask)
						proje.save()
						Logs.create({type: `Todo - ${newTask.title} has been created`, author: req.body.user}, function (err, complete) {
								// if(err) return res.send({error: 'Something Went Wrong in logs'})
								if(err) return console.log(err)
								res.send({todo: newTask})
						})
				})
		})
})

router.post('/modifyTask/:id', (req, res) => {
		Todos.findByIdAndUpdate(req.params.id, req.body[0], function (err, updatedTask) {
				// if(err) return res.send({error: 'Task Update Went Wrong'})
				if(err) return console.log(err)
				Logs.create({type: `Todo Update`, author: req.body[1], after: updatedTask})
					if(err) return res.send({error: 'Log Creation Went Wrong'})
				res.send({todo: updatedTask})
		})
})

router.get('/tasksGetter/:id', (req, res) => {
		Project.findById(req.params.id).populate('todos').exec(function (err, result) {
				if(err) return res.send({error: 'Something Went Wrong'})
				const todos = []
				result.todos.forEach(function (todo) {
						todos.push(todo)
				})
				res.send({todos: todos})
		})
})

router.post('/deleteTask/:id', (req, res) => {
		Todos.findByIdAndRemove(req.params.id, function (err, todo){
				if(err) return res.send({error: 'Something Went Wrong'})
		})
})
		// Todos.findByIdAndRemove(req.params.id, function (err, result) {
		// 		if(err) return res.send({error: 'Something Went Wrong'})

module.exports = router