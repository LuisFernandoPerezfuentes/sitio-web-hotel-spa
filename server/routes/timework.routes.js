const express = require('express');
const router = express.Router();

const timework = require('../controllers/timework.controller');

router.get('/', timework.getTimeworks);
router.post('/', timework.createTimework);
router.get('/:id', timework.getTimework);
router.put('/:id', timework.editTimework);
router.delete('/:id', timework.deleteTimework);

module.exports = router;