const express = require('express')
const router = express.Router()
const studentData = require('../studentData.json')
const fs = require('fs')


router.get('/', (req, res) => {   
    const studentsInfo = {
        groupType: Object.keys(studentData),
        arrayOfGroup: studentData.students
    }                                     //JSON data taken from studentData.json, contains all student info
    res.render('index', studentsInfo) 
    //render the studentProfiles hbs content, and fill in the template with data from students
})

router.get('/:name', (req, res) => {
   
    const {name} = req.params
    const studentInfo = studentData.students.find(function(element) {
            return element.name == name
        })    
    res.render('profile', studentInfo)
})

router.post('/:name', (req, res) => {
    const {name} = req.params
    const newCommentData = {
        commenter: req.body.commenter,
        comment: req.body.comment,
        date: req.body.date
    }
    
    studentData.students.push(newCommentData)

    let edited_studentData = JSON.stringify(studentData,null,2);
    fs.writeFileSync('studentData.json', edited_studentData);
    
    res.redirect('/student/' + name)

})

module.exports = router