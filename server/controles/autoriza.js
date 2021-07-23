'use strict'
;
let jwt = require('jsonwebtoken')
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV;
const config = require(__dirname + '/../db/config/config.js')[env]
const OP = Sequelize.Op
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
let modelos = require('../db/models')


let verifica = (req, res, next) => {
    let token = req.headers.authorization || null
    let datos = null
    console.log(token)
    if (token) {
        token = token.split('Bearer ')
        jwt.verify(token[1], process.env.KEY_JWT, (err, decoded) => {
            if (err) {
                return res.status(200).json({
                    datos: null,
                    estado: 'Error en la autentificación, exedió el límite de tiempo'
                })
            } else {
                modelos.Personal.findOne({
                    attributes: ['semilla'],
                    where: {
                        [OP.and]: [
                            {idPersona: decoded.data.id},
                            {estado: 1}
                        ]
                    }
                }).then(data => {
                    console.log(data)
                    if (data) {
                        req.token = jwt.sign({data: decoded.data}, data.semilla, {
                            algorithm: 'HS256',
                            expiresIn: process.env.TIEMPO
                        })
                        next()
                    } else {
                        return res.status(200).json({
                            datos: null,
                            estado: 'Error en la autentificación, exedió el límite de tiempo'
                        })
                    }
                }).catch(e => {
                    return res.status(200).json({
                        datos: null,
                        estado: 'Error en la autentificación, exedió el límite de tiempo'
                    })
                })
            }
        })
    } else {
        return res.status(200).json({
            data: null,
            estado: 'Error del servidor, sí el problema persiste por favor comuníquese con el adminsitrador del sistema',
            tk: null
        })
    }
}

module.exports = {
    verifica
}