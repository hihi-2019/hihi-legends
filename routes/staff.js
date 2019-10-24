const express = require('express')
const router = express.Router()
const staffData = require('../staffData.json')


router.get('/', (req, res) => {    
    const staffsInfo = {
        groupType: Object.keys(staffData),
        arrayOfGroup: staffData.staff
    }                                     //JSON data taken from staffData.json, contains all staff info
    res.render('index', staffsInfo) 
    //render the staffProfiles hbs content, and fill in the template with data from staffs
})

router.get('/:name', (req, res) => {
   
    const {name} = req.params
    const staffInfo = staffData.staffs.find(function(element) {
            return element.name == name
        })   
    res.render('profile', staffInfo)
})


module.exports = router