const bcrypt = require('bcrypt');
const Doctor = require('../models/doctorModel');

const crearDoctor = async (body) =>{
    let doctor = new Doctor({
        email: body.email,
        nombres: body.nombres,
        apellidos: body.apellidos,
        telefono: body.telefono,
        password: bcrypt.hashSync(body.password, 10)
    });
    return await doctor.save();
};

const listarDoctores = async () => {
    let doctores = await Doctor.find({estado: true});
    return doctores;
}

const actualizarDoctor = async (email, body) => {
    let doctor = await Doctor.findOneAndUpdate({ "email": email }, {
        $set: {
            nombres: body.nombres,
            apellidos: body.apellidos,
            telefono: body.telefono,
            password: body.password

        }
    }, {new: true});
    return doctor
};

const eliminarDoctor = async (email) => {
    let doctor = await Doctor.findOneAndUpdate({"email": email}, {
        $set: {
            estado: false
        }
    }, {new: true});
    return doctor;
}


module.exports = {
    listarDoctores,
    crearDoctor,
    actualizarDoctor,
    eliminarDoctor
}