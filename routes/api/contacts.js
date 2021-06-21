const express = require('express');

const validation = require('./validation');
const {
  getAllContacts,
  getContactById,
  createContact,
  deleteContact,
  patchContact,
} = require('../../controller/contacts');

const router = express.Router();

router.get('/', getAllContacts);

router.get('/:contactId', getContactById);

router.post('/', validation.createContact, createContact);

router.delete('/:contactId', deleteContact);

router.put('/:contactId', validation.updateContact, patchContact);

module.exports = router;
