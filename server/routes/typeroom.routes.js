const express = require('express');
const router = express.Router();

const typeroom = require('../controllers/typeroom.controller');

router.get('/', typeroom.getTyperooms);
router.post('/', typeroom.createTyperoom);
router.get('/:id', typeroom.getTyperoom);
router.put('/:id', typeroom.editTyperoom);
router.delete('/:id', typeroom.deleteTyperoom);

module.exports = router;