const express = require('express');
const { crearPaciente, listarPaciente, actualizarPaciente, eliminarPaciente } = require('../functions/paciente');
const validarToken = require('../middlewares/auth');

const router = express.Router();

router.post('/', validarToken, (req, res) => {
    const body = req.body;

    let resultado = crearPaciente(body);

    resultado.then((user) => {
        res.json({
            message: "Paciente creado con exito",
            user
        })
    }).catch(err => {
        res.json({err});
    });
});

router.get('/', validarToken, (req, res) => {
    let resultado = listarPaciente();
    resultado.then(users => {
        res.json(users);
    }).catch(err => {
        res.json(err);
    });
});

router.put('/:email', validarToken, (req, res) => {
    let email = req.params.email;
    let body = req.body;
    let resultado = actualizarPaciente(email, body);

    resultado.then(user => {
        res.json({
            message: "Paciente modificado con exito",
            user
        });
    }).catch(err => res.json(err));
});

router.delete('/:email', validarToken, (req, res) => {
    let email = req.params.email;
    let resultado = eliminarPaciente(email);
    resultado.then(user => {
        res.json({
            message: "Paciente eliminado con exito",
            user
        });
    }).catch(err => res.json(err));
});


module.exports = router;
