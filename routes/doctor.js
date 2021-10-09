const express = require('express');
const { crearDoctor, listarDoctores, actualizarDoctor, eliminarDoctor } = require('../functions/doctor');



const router = express.Router();

router.get('/', (req, res) => {
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
            nombres: user.nombres
        })
    }).catch(err => res.json(err));
});

router.put('/:email', (req, res) => {
    let email = req.params.email;
    let body = req.body;
    let resultado = actualizarDoctor(email, body);

    resultado.then(user => {
        res.json(user)
    }).catch(err => res.json(err));
});

router.delete('/:email', (req, res) => {
    let email = req.params.email;
    let resultado = eliminarDoctor(email);
    resultado.then(user => {
        res.json({
            message: 'Eliminado con exito',
            user
        });
    }).catch(err => res.json(err));
});


module.exports = router;

