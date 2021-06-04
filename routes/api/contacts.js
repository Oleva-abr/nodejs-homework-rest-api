const express = require('express');
const router = express.Router();
const Contacts = require('../../model/index');

router.get('/', async (req, res, next) => {
  try {
    res.json({ message: 'template message' });
  } catch {}
});

router.get('/:contactId', async (req, res, next) => {
  try {
    res.json({ message: 'template message' });
  } catch {}
});

router.post('/', async (req, res, next) => {
  try {
    res.json({ message: 'template message' });
  } catch {}
});

router.delete('/:contactId', async (req, res, next) => {
  try {
    res.json({ message: 'template message' });
  } catch {}
});

router.patch('/:contactId', async (req, res, next) => {
  try {
    res.json({ message: 'template message' });
  } catch {}
});

module.exports = router;
