const express = require('express')
const bodyParser = require('body-parser')
const controller = require(`${process.env.PWD}/server/controllers/transactionController.js`)
const swaggerUi = require('swagger-ui-express')

const app = express()

    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())

    .get('/api/v1/transaction', controller.getHistory)
/api/v1/transaction/credit    .post('', controller.credit)
    .post('/api/v1/transaction/debit', controller.debit)

    .use(function (error, req, res, next) {
        console.log(`Se produjo un error: ${error}`)
    })

    .use(express.static('./public'))

module.exports = app