const mongoose = require('mongoose');

const pacienteSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: String
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = {
    pacienteSchema,
    Paciente: mongoose.model('Paciente', pacienteSchema)
};