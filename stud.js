const mongoose = require('mongoose')


const studSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('stud',studSchema) 
