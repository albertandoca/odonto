'use strict'
;

const EXPRESS = require('express')

let endPoint = EXPRESS.Router()
let persona = require('../controles/persona')
let direccion = require('../controles/direccion')
let telefono = require('../controles/telefono')
let antecedente = require('../controles/antecedente')
let medicamento = require('../controles/medicamento')
let rol = require('../controles/rol')
let personal = require('../controles/personal')
let autoriza = require('../controles/autoriza')


endPoint.post('/persona',  autoriza.verifica, persona.nuevo)
endPoint.put('/persona',  autoriza.verifica, persona.actualiza)
endPoint.delete('/persona',  autoriza.verifica, persona.elimina)
endPoint.get('/personas',  autoriza.verifica, persona.buscaTodo)
endPoint.get('/personas/:campo', autoriza.verifica, persona.buscaCampo)
endPoint.get('/persona/:id', autoriza.verifica, persona.buscaId)


endPoint.post('/direccion', autoriza.verifica, direccion.nuevo)
endPoint.put('/direccion', autoriza.verifica, direccion.actualiza)
endPoint.delete('/direccion', autoriza.verifica, direccion.elimina)


endPoint.post('/telefono', autoriza.verifica, telefono.nuevo)
endPoint.put('/telefono', autoriza.verifica, telefono.actualiza)
endPoint.delete('/telefono', autoriza.verifica, telefono.elimina)


endPoint.post('/antecedente', autoriza.verifica, antecedente.nuevo)
endPoint.put('/antecedente', autoriza.verifica, antecedente.actualiza)
endPoint.delete('/antecedente', autoriza.verifica, antecedente.elimina)


endPoint.post('/medicamento', autoriza.verifica, medicamento.nuevo)
endPoint.put('/medicamento', autoriza.verifica, medicamento.actualiza)
endPoint.delete('/medicamento', autoriza.verifica, medicamento.elimina)


endPoint.post('/rol', autoriza.verifica, rol.nuevo)
endPoint.put('/rol', autoriza.verifica, rol.actualiza)
endPoint.delete('/rol', autoriza.verifica, rol.elimina)


endPoint.post('/personal', autoriza.verifica, personal.nuevo)
endPoint.put('/personal', autoriza.verifica, personal.actualiza)
endPoint.delete('/personal', autoriza.verifica, personal.elimina)
endPoint.post('/login', personal.logIn)


module.exports = endPoint