const express = require('express')
const Cities = require('../models/Cities')
const router = express.Router({
    mergeParams: true
})

router.get('/', async (req, res) => {
    try {
        const {orderBy, equalTo} = req.query
        const list = await Cities.find({[orderBy]: equalTo})
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message: 'На сервере произошла ошибка'
        })
    }
})

module.exports = router