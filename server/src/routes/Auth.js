const express = require('express')
const router =  express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const config = require('../config/config')
const bcrypt = require('bcrypt')

function jwtSignUser (user) {
		const TEN_MIN = 60 * 10
		return jwt.sign(user, config.authentication.jwtSecret, {expiresIn: TEN_MIN})
}

router.post('/login', (req, res) => {
		console.log(req.body)
	User.findOne({'username': req.body.email}, function (err, user) {
			if(!user) {
					return res.send({error: 'Username or password is incorrect'})
			}else{
			const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
			if(!isPasswordValid){
					res.send({error: 'Username or password is incorrect'})
			}else{
					const userJson = user.toJSON()
					res.send({
							user: userJson,
							token: jwtSignUser(userJson)
					})
			}
			}
	})
})

router.post('/register', (req, res) => {
		const newUser = new User({
				name: req.body.name,
				surname: req.body.surname,
				password: req.body.password,
				username: req.body.email,
				permission: req.body.permission
		})
		User.createUser(newUser,  function (err, user) {
				if(err) return res.status(403).send({error: 'Something went wrong'})
				const userJson = user.toJSON()
				res.status(200).send({
						user: userJson,
						token: jwtSignUser(userJson)
				})
		})
})


module.exports = router