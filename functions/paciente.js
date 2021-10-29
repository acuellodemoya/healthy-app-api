const Paciente = require('../models/pacienteModel');

const crearPaciente = async (body) => {
    let paciente = new Paciente({
        nombres: body.nombres,
        apellidos: body.apellidos,
        email: body.email,
        telefono: body.telefono,
        fecha_nacimiento: body.fecha_nacimiento,
        sexo: body.sexo,
        tipo_sangre: body.tipo_sangre,
        tipo_seguro: body.tipo_seguro
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
            fecha_nacimiento: body.fecha_nacimiento,
            sexo: body.sexo,
            tipo_sangre: body.tipo_sangre,
            tipo_seguro: body.tipo_seguro
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

