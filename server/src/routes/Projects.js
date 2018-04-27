const express = require('express')
const router =  express.Router()
const dateFormat = require('dateformat');
const now = new Date();
const Project = require('../models/Project')
const Logs = require('../models/Logs')


router.post('/new-project', (req, res) => {
		const newProject = req.body
		newProject.regDate = dateFormat(now, 'dd-mm-yyyy')
		newProject.startDate = dateFormat(req.body.startDate, 'dd-mm-yyyy')
		newProject.finishDate = dateFormat(req.body.finishDate, 'dd-mm-yyyy')

		Project.create(newProject, function (err, result) {
				if(err) return res.send({error: 'Something Went Wrong'})
				Logs.create({type: 'Project Created', author: req.body.user, body: result}, function (err, done) {
						if(err) return res.send({error: 'Log was not created'})
						res.send({success: 'Project Saved'})
				})
		})
})

router.get('/projectsGetter', (req, res) => {
		Project.find({}, function (err, projects) {
				if(err) return res.send({error: 'Something Went Wrong'})
				res.send({success: 'done', data: projects})
		})
})

router.get('/getProject/:id', (req, res) => {
		Project.findById(req.params.id, function (err, project) {
				if(err) return res.send({error: 'Something Went Wrong'})
				res.send({success: 'done', project: project})
		})
})

module.exports = router