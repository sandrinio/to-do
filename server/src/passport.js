const passport = require('passport')
const User = require('./models/User')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('./config/config')

passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.jwtSecret
  }, async function (jwtPayload, done) {
    console.log(jwtPayload)
    try {
       User.findOne({'_id': jwtPayload.id}, function (err, user) {
		       if (err) {
				       return done(new Error(), false)
		       }return done(null, user)
       })

    } catch (err) {
      return done(new Error(), false)
    }
  })
)

module.exports = null
