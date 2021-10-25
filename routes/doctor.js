const express = require('express');
const { crearDoctor, listarDoctores, actualizarDoctor, eliminarDoctor } = require('../functions/doctor');
const validarToken = require('../middlewares/auth');

const router = express.Router();

router.get('/', validarToken, (req, res) => {
    let resultado = listarDoctores();

    resultado.then(users =>{
        res.json(users);
    }).catch(err => {
        res.json(err);
    })
});

router.post('/', (req, res) => {
    let body = req.body;
    let resultado = crearDoctor(body);

    resultado.then(user => {
        res.json({
            message: "Doctor creado con exito",
            user
        })
    }).catch(err => res.json(err));
});

router.put('/:email', validarToken, (req, res) => {
    let email = req.params.email;
    let body = req.body;
    let resultado = actualizarDoctor(email, body);

    resultado.then(user => {
        res.json({
            message: "doctor modificado con exito",
            user
        })
    }).catch(err => res.json(err));
});

router.delete('/:email', validarToken, (req, res) => {
    let email = req.params.email;
    let resultado = eliminarDoctor(email);
    resultado.then(user => {
        res.json({
            message: 'Doctor eliminado con exito',
            user
        });
    }).catch(err => res.json(err));
});


module.exports = router;

