'use strict'
;
let env = require('dotenv').config()
let app = require('./app')
const PORT = process.env.PORT

app.listen(PORT, (err) => {
    if(!err) {
        console.log(`El servicios está funcionando en el puerto ${ PORT }`)
    } else {
        console.log(`El servidor no está funcionando`)
    }
})