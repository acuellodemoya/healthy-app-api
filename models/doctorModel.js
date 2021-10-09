const mongoose = require('mongoose');

const doctorSchema = new  mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String, //Se valida que sea email desde el frontend
        required: true,
        unique: true
    },
    telefono: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }
});



module.exports = mongoose.model('Doctor', doctorSchema)