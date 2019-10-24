const express = require('express')
const router = express.Router()
const staffData = require('../staffData.json')


router.get('/', (req, res) => {
    const staffProfiles = 'partials/index' //this is a link to a hbs partial called index
    
    const staffsInfo = {
        groupType: Object.keys(staffData),
        arrayOfGroup: staffData.staff
    }                                     //JSON data taken from staffData.json, contains all staff info
    res.render(staffProfiles, staffsInfo) 
    //render the staffProfiles hbs content, and fill in the template with data from staffs
})

router.get('/:name', (req, res) => {
   
    const {name} = req.params
    const profile = 'partials/profile' // this is a link to a hbs partial called profile
    const staffInfo = staffData.staffs.find(function(element) {
            return element.name == name
        })
    
        console.log('name is :', name)
    // console.log(staffInfo)
    console.log(staffData.staffs)
      
   
    res.render(profile, staffInfo)
})


module.exports = router