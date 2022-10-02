const express = require('express')
const router = express.Router({
    mergeParams: true
})

router.use('/cities', require('./cities.routes'))

module.exports = router