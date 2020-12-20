const express = require('express')
const router = express.Router()

const calcDeterminante = require('./controllers/calcDeterminante')


router.post('/calcularDeterminante', calcDeterminante.get)
router.get('/calcularTeste', () => {
    console.log('teste')
})



module.exports = router