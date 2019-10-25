const express = require('express')
const router = express.Router()
const studentData = require('../studentData.json')
const fs = require('fs')


router.get('/', (req, res) => {   
    const studentsInfo = {
        groupType: 'Students',
        arrayOfGroup: studentData.students
        }                                     
    res.render('index', studentsInfo) 
})

router.get('/:name', (req, res) => {
    const {name} = req.params
    const studentInfo = studentData.students.find(function(element) {
            return element.name == name
        })    
    studentInfo.groupType='Students'
    res.render('profile', studentInfo)
})

router.post('/:name', (req, res) => {
    const {name} = req.params
    let today = new Date ()
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0')
    var yyyy = today.getFullYear()
    today = dd + '/' + mm + '/' + yyyy
    // let dayofMonth = day.getDate()
    // let month = day.getMonth()
    // let year = day.getFullYear()
    
    const newCommentData = {
        commenter: req.body.commenter,
        comment: req.body.comment,
        date: today
    
    }
    const studentInfo = studentData.students.find(function(element) {
        return element.name == name
    })  
    studentInfo.groupType ='Student'
    studentInfo.comments.push(newCommentData)
    

    let edited_studentData = JSON.stringify(studentData,null,2);
    fs.writeFileSync('studentData.json', edited_studentData);
    
    res.render('profile', studentInfo)

})

module.exports = router