const express = require('express');
const config = require('config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctorModel');


const router = express.Router();

router.post('/', (req, res) => {
    const body = req.body;
    Doctor.findOne({email: body.email})
        .then(data => {
            if(data){
                const passwordValid = bcrypt.compareSync(body.password, data.password);
                if(!passwordValid) return res.statu(400).json({message: 'Usuario o contraseña invalido'});
                const token = jwt.sign({
                    doctor: {_id: data._id, email: data.email}
                }, 'SECRET', {expiresIn: '24h'});

                res.json({
                    doctor: {_id: data._id, email: data.email},
                    message: 'Validado con Exito!',
                    token: token,
                });
            }else{
                res.status(400).json({
                    message: "Usuario o contraseña Invalido"
                });
            }
        }).catch(err => {
            res.status(400).json({
                message: "Error interno"
            })
        })
})

module.exports = router;

