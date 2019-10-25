const express = require('express')
const router = express.Router()
const staffData = require('../staffData.json')
const fs = require('fs')


router.get('/', (req, res) => {    
    const staffsInfo = {
        groupType: 'Staff',
        arrayOfGroup: staffData.staff
    }                                   
    res.render('index', staffsInfo) 

})

router.get('/:name', (req, res) => {
    const {name} = req.params
    const staffInfo = staffData.staff.find(function(element) {
            return element.name == name
        })   
    staffInfo.groupType='staff'
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
    staffInfo.groupType='Staff'
    staffInfo.comments.push(newCommentData)

    let edited_staffData = JSON.stringify(staffData,null,2);

    fs.writeFileSync('staffData.json', edited_staffData);
    
    res.render('profile', staffInfo)
  

})

module.exports = router