const express = require('express')
const userRouter = require('./router')
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json()) 

app.use('/questions',userRouter)

module.exports = app