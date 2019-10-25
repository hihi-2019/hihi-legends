const express = require('express')
const router = express.Router()
const staffData = require('../staffData.json')
const fs = require('fs')


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
    const staffInfo = staffData.staff.find(function(element) {
            return element.name == name
        })   
    res.render('profile', staffInfo)
})




router.post('/:name', (req, res) => {
    const {name} = req.params
    const newCommentData = {
        commenter: req.body.commenter,
        comment: req.body.comment,
        date: new Date ()
       
    }
    const staffInfo = staffData.staff.find(function(element) {
        return element.name == name
    })   
    
    staffInfo.comments.push(newCommentData)

    let edited_staffData = JSON.stringify(staffData,null,2);

    fs.writeFileSync('staffData.json', edited_staffData);
    
    res.send('/staff/'+name)

})

module.exports = router