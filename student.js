const express = require('express')
const router = express.Router()

const s = require('../mod/stud')

router.get('/', (req,res) => {
    try{
        const student =  s.find()
        res.json(student)
    }catch(err){
        res.send('error ' +err)
    }
})

router.post('/', (req,res) => {
    const abc = new s ({
        name: req.body.name,

    })
    try{
        const a1 =  abc.save()
        res.send(a1)
    }catch(err){
        res.send('Error')
    }

})


module.exports = router