const express = require('express');
const router = express.Router();
const users = require('../../controller/users');
const guard = require('../../helpers/guard');
const { accountLimiter } = require('../../helpers/rateLimit');
const upload = require('../../helpers/upload');

router.post('/register', accountLimiter, users.reg);
router.post('/login', users.login);
router.post('/logout', guard, users.logout);
router.get('/current', guard, users.getCurrentUser);
router.patch('/avatars', guard, upload.single('avatar'), users.avatars);
module.exports = router;
