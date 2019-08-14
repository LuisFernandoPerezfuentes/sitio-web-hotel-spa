const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservamasajeSchema = new Schema({
    idcliente: { type: String, required: true},
    hourenter: { type: String, required: true },
    hourexit: { type: String, required: true },
    tipomasaje: { type: String, required: true },
    fechareserva: { type: Date, required: true },
    usovapor: { type: Number, required: true }



});

module.exports = mongoose.model('Reservamasaje', reservamasajeSchema);