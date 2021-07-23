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
    modelos.Persona.findOne({
        where: {
            identificacion: datos.identificacion
        }
    }).then(data => {
        if (!data) {
            modelos.Persona.create(datos)
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
    modelos.Persona.update(datos, {
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
    modelos.Persona.destroy({
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

let buscaTodo = (req, res) => {
    modelos.Persona.findAll().then(data => {
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

let buscaCampo = (req, res) => {
    let datos = req.params.campo
    modelos.Persona.findAll({
        where: {
            [OP.or]: [
                {identificacion: {[OP.substring]:datos}},
                {primerNombre: {[OP.substring]:datos}},
                {segundoNombre: {[OP.substring]:datos}},
                {apellidoPaterno: {[OP.substring]:datos}},
                {apellidoMaterno: {[OP.substring]:datos}},
                {email: {[OP.substring]:datos}},
                {fechaNacimiento: {[OP.substring]:datos}}
            ]
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

let buscaId = (req, res) => {
    let datos = req.params.id
    console.log(datos)
    modelos.Persona.findOne({
        where: {
            id: datos
        },
        include: [
            {model: modelos.Telefono},
            {model: modelos.Direccion},
            {model: modelos.Antecedente},
            {model: modelos.Medicamento},
            {model: modelos.Rol}
        ]
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
    elimina,
    buscaTodo,
    buscaCampo,
    buscaId
}