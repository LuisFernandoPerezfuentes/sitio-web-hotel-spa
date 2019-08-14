const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
    telephone: { type: String, required: true },
    mail: { type: String, required: true }
});

module.exports = mongoose.model('Contact', contactSchema);