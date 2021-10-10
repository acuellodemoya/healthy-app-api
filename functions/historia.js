const Historia = require('../models/historiaModel');
var ObjectId = require('mongoose').Types.ObjectId;

const crearHistoria = async (body) => {
    const historia = new Historia({
        paciente: body.paciente,
        doctor: body.doctor,
        comentarios: body.comentarios,
        receta: body.receta
    })
    return await historia.save();
};

const listarHistoria = async (paciente) => {
    const historias = await Historia.find({paciente: paciente})
        .populate("doctor", {nombres: 1, apellidos: 1}).populate("paciente", {nombres: 1, apellidos: 1})
    return historias;
};

const actualizarHistoria = async (idHistoria, body) => {
    const historia = await Historia.findByIdAndUpdate(idHistoria, {
        $set:{
            comentarios: body.comentarios,
            receta: body.receta
        }
    }, {new: true});
    return historia;
};

const eliminarHistoria = async (idHistoria) => {
    const historia = await Historia.findByIdAndUpdate(idHistoria, {
        $set: {
            estado: false
        }
    }, {new: true});
    return historia;
}

module.exports = {
    crearHistoria,
    listarHistoria,
    actualizarHistoria,
    eliminarHistoria
}

