const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { HttpCode } = require('./helpers/contacts');
// const AVATAR_OF_USERS = process.env.AVATAR_OF_USERS;
const contactsRouter = require('./routes/api/contacts');
const usersRouter = require('./routes/api/users');
const path = require('path');
const app = express();
require('dotenv').config();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(helmet());
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json({ limit: 10000 }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  handler: (_req, res, next) => {
    return res.status(HttpCode.BAD_REQUEST).json({
      status: 'error',
      code: HttpCode.BAD_REQUEST,
      data: 'Forbidden',
      message: 'Too many requests,please try later',
    });
  },
});

app.use(express.static(path.join(__dirname, 'users')));
app.use('/api/', apiLimiter);

app.use('/api/users', usersRouter);
app.use('/api/contacts', contactsRouter);

app.use((_req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
