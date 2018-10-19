const Transaction = require(`${process.env.PWD}/server/models/transaction.js`)
const _ = require('lodash')

var history = []

function getHistory(res, res, next) {
    const a = _.orderBy(history, ['aumount', 'type'], ['asc', 'asc']);
    res.send(a)

}
function credit(req, res, next){
  const transaction =  new Transaction({
        type: req.body.type,
        aumount: req.body.aumount,
    })
    history.push(transaction)
    res.send('Se acredito con exito')
    console.log('Historial', history)

}
function debit(req, res, next){
    const transaction =  new Transaction({
        type: req.body.type,
        aumount: req.body.aumount,
    })
    const total = getTotal()
    if(transaction.aumount <= total){
        history.push(transaction)
        res.send('Se debito con exito')
    } else {
        res.send('No posee fondos para realizar esta operacion')
    }
}
function getTotal() {
   const r = _.chain(history)
    .map(function(element){
         return element.type == 'credit' ? Number(element.aumount) : Number(-element.aumount)
    })
    .sum()
    .value();
    return r
}

module.exports = {debit, credit, getHistory}