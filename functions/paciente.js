const Paciente = require('../models/pacienteModel');

const crearPaciente = async (body) => {
    let paciente = new Paciente({
        nombres: body.nombres,
        apellidos: body.apellidos,
        email: body.email,
        telefono: body.telefono
    });
    return await paciente.save();
};

const listarPaciente = async () => {
    let pacientes = await Paciente.find({estado: true});
    return pacientes;
};

const actualizarPaciente = async (email, body) => {
    let paciente = await Paciente.findOneAndUpdate({"email": email}, {
        $set: {
            nombres: body.nombres,
            apellidos: body.apellidos,
            telefono: body.telefono,
        }
    }, {new: true});

    return paciente;
};

const eliminarPaciente = async (email) => {
    let paciente = await Paciente.findOneAndUpdate({"email": email}, {
        $set: {
            estado: false
        }
    }, {new: true});
    return paciente;
};


module.exports = {
    crearPaciente,
    listarPaciente,
    actualizarPaciente,
    eliminarPaciente
};

