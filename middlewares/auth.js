const jwt = require('jsonwebtoken');

const validarToken = (req, res, next) => {
    const token = req.headers['auth'];

    jwt.verify(token, 'SECRET', (err, decoded) => {
        if(err) return res.status(401).json(err)
        req.email = decoded.email;
        next();
    })
}


module.exports = validarToken;