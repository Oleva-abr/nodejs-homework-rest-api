const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const SECRET_KEY = process.env.JWT_SECRET;
