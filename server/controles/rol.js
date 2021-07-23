'use strict'
;

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


let nuevo = (req, res) => {
    let datos = req.body.data
    modelos.Rol.findOne({
        where: {
            [OP.and]: [
                {idPersona: datos.idPersona},
                {descripcion: datos.descripcion}
            ]
        }
    }).then(data => {
        if (!data) {
            modelos.Rol.create(datos)
            .then(data1 => {
                return res.status(200).json({
                    datos: data1,
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
                datos: data,
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
    modelos.Rol.update(datos, {
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
    modelos.Rol.destroy({
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



module.exports  = {
    nuevo,
    actualiza,
    elimina
}