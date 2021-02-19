const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Studentinfo'

const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected')
})

app.use(express.json())

const studRouter = require('./routes/student')
app.use('/student',studRouter)

app.listen(9000, () => {
    console.log('server started')

})