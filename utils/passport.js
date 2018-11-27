const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const db = require("../models");

const SECRET = process.env.SECRET;

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET,
    },
    function (jwt_payload, done) {
      db.User.findOne({ where: { id: jwt_payload.id } })
        .then(user => {
          if (!user) return done(null, false);

          return done(null, user);
        })
        .catch(err => done(err, false));
    })
);

module.exports = passport;