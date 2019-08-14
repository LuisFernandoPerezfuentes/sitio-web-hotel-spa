const express = require('express');
const router = express.Router();

const reservamasaje = require('../controllers/reservamasaje.controller');

router.get('/', reservamasaje.getReservamasaje);
router.post('/', reservamasaje.createReservamasaje);
router.get('/:id', reservamasaje.getReservamasaje);
router.put('/:id', reservamasaje.editReservamasaje);
router.delete('/:id', reservamasaje.deleteReservamasaje);

module.exports = router;