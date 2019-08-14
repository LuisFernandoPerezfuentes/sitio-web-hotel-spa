const mongoose = require('mongoose');
const { Schema } = mongoose;

const timeworkSchema = new Schema({
    idemployee: { type: String, required: true},
    hourenter: { type: String, required: true },
    hourexit: { type: String, required: true },


    
    tipohabitacion: { type: String, required: true },
    fechareserva: { type: Date, required: true },
    numeropersonas: { type: Number, required: true }
});

module.exports = mongoose.model('Timework', timeworkSchema);