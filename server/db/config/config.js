'use strict'
;
let env = require('dotenv').config()

let development = {
    username: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.NAME_DB,
    host: process.env.HOST_DB,
    dialect: 'mysql',
    operatorsAliases: 0,
    define: {freezeTableName: true}
}

let test = {
    username: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.NAME_DB,
    host: process.env.HOST_DB,
    dialect: 'mysql',
    operatorsAliases: 0,
    define: {freezeTableName: true}
}

let production = {
    username: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.NAME_DB,
    host: process.env.HOST_DB,
    dialect: 'mysql',
    operatorsAliases: 0,
    define: {freezeTableName: true}
}

module.exports = {
    development,
    test,
    production
}