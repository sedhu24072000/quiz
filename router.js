const express = require('express')
const handlers = require('./controller')

const router = express.Router()

router.route('/').get(handlers.getQuestion).post(handlers.createQuestion)

module.exports = router