'use strict'
;

const Sequelize = require('sequelize')
const env = process.env.NODE_ENV;
const config = require(__dirname + '/../db/config/config.js')[env]
const OP = Sequelize.Op
let sequelize;
let jwt = require('jsonwebtoken')
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
let modelos = require('../db/models')
let Op = Sequelize.Op

let nuevo = (req, res) => {
    let datos = req.body.data
    modelos.Personal.findOne({
        where: {
            idPersona: datos.idPersona
        }
    }).then(data => {
        if (!data) {
            modelos.Personal.create(datos)
            .then(data1 => {
                return res.status(200).json({
                    datos: 1,
                    estado: 'ok',
                    tk: req.token
                })
            }).catch(e => {
                return res.status(200).json({
                    datos: null,
                    estado: 'Los datos no se guardaron, intente nuevamente',
                    tk: null
                })
            })
        } else {
            return res.status(200).json({
                datos: 0,
                estado: 'nOk',
                tk: null
            })
        }
    }).catch (e => {
        return res.status(200).json({
            datos: null,
            estado: 'Problemas con la conexión con el servidor',
            tk: null
        })
    })
}

let actualiza = (req, res) => {
    let datos = req.body.data
    modelos.Personal.update(datos, {
        where: {
            id: datos.id
        }
    }).then(data => {
        return res.status(200).json({
            datos: data,
            estado: 'ok',
            tk: req.token
        })
    }).catch (e => {
        return res.status(200).json({
            datos: null,
            estado: 'Problemas con la conexión con el servidor',
            tk: null
        })
    })
}

let elimina = (req, res) => {
    let datos = req.body.data
    modelos.Personal.destroy({
        where: {
            id: datos.id
        }
    }).then(data => {
        return res.status(200).json({
            datos: data,
            estado: 'ok',
            tk: req.token
        })
    }).catch (e => {
        return res.status(200).json({
            datos: null,
            estado: 'Problemas con la conexión con el servidor',
            tk: null
        })
    })
}

let logIn = (req, res) => {
    let datos = req.body.data
    modelos.Persona.findOne({
        where: {
            identificacion: datos.identificacion
        },
        include: [
            {model: modelos.Rol}
        ]
    }).then(data => {
        data = data.toJSON()
        console.log(data)
        modelos.Personal.findOne({
            where: {
                idPersona: data.id
            }
        }).then(data1 => {
            if (data1) {
                console.log(data1)
                data1.comparePassword(datos.semilla, (err, isMatch) => {
                    if(isMatch && !err){
                        let token = jwt.sign({data: data}, process.env.KEY_JWT, {
                            algorithm: 'HS256',
                            expiresIn: process.env.TIEMPO
                        })
                        return res.status(200).json({
                            datos: null ,
                            estado: 'ok',
                            tk: token
                        })
                    } else {
                        return res.status(200).json({
                            datos: null ,
                            estado: 'Usuario o contraseña incorrecto',
                            tk: null
                        })
                    }
                })
            } else {
                return res.status(200).json({
                    datos: null ,
                    estado: 'Usuario o contraseña incorrecto',
                    tk: null
                })
            }
        }).catch(e => {
            return res.status(200).json({
                datos: null ,
                estado: '22Problemas con la conexión con el servidor',
                tk: null
            })
        })
    }).catch(e => {
        return res.status(200).json({
            datos: null ,
            estado: '11Problemas con la conexión con el servidor',
            tk: null
        })
    })
}


module.exports  = {
    logIn,
    nuevo,
    actualiza,
    elimina
}