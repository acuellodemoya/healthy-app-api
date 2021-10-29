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
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    sexo: {
        type: String,
    },
    tipo_sangre: {
        type: String,
        required: true
    },
    tipo_seguro: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Paciente', pacienteSchema);
