const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Historia', historialSchema);