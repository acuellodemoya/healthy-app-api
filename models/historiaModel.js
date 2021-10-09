const mongoose = require('mongoose');
const  Doctor  = require('./doctorModel');
const  Paciente  = require('./pacienteModel');

const historialSchema = mongoose.Schema({
    paciente: {
        type: Schema.ObjectId,
        ref: 'Paciente'
    },
    doctor: {
        type: Schema.ObjectId,
        ref: 'Doctor'
    },
    comentarios: {
        type: String,
        required: true
    },
    receta: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Historial', historialSchema);