'use strict'
;

const EXPRESS = require('express')
const HELMET = require('helmet')
const CORS = require('cors')



let app = EXPRESS()
let rutas = require('../rutas/index')
let modelos = require('../db/models')



app.use(EXPRESS.json())
app.use(EXPRESS.urlencoded({extended: true}))
app.use(CORS())

modelos.sequelize.sync().then(() => {
    console.log('DB en línea...')
}).catch(err => {
    console.log(err) 
})


app.use('/', rutas)

module.exports = app