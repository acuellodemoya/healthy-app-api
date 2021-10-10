const express = require('express');
const { crearHistoria, listarHistoria, actualizarHistoria, eliminarHistoria } = require('../functions/historia');
const Paciente = require('../models/pacienteModel');


const router = express.Router();

router.post('/', (req, res) => {
    let body = req.body;
    let resultado = crearHistoria(body);

    resultado.then(historia => {
        res.json({
            message: "Historia creada con exito",
            historia
        });
    }).catch(err => res.json(err));
});

router.get('/listar/:email', async (req, res) => {
    let email = req.params.email;
    let paciente = await Paciente.findOne({"email": email})
    let resultado = listarHistoria(paciente);

    resultado.then(historia => {
        res.json(historia)
    }).catch(err => res.json(err));
})

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let resultado = actualizarHistoria(id, body);

    resultado.then(historia => {
        res.json({
            message: "Historia actualizada con exito",
            historia
        });
    }).catch(err => res.json(err));
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let resultado = eliminarHistoria(id);

    resultado.then((historia) => {
        res.json({
            message: "Historia eliminada con exito",
            historia
        });
    }).catch(err => res.json(err));
});

module.exports = router;