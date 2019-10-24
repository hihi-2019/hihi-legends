const express = require('express')
const router = express.Router()
const studentData = require('../studentData.json')


router.get('/', (req, res) => {
    const studentProfiles = 'partials/index' //this is a link to a hbs partial called index
    
    const studentsInfo = {
        groupType: Object.keys(studentData),
        arrayOfGroup: studentData.students
    }                                     //JSON data taken from studentData.json, contains all student info
    res.render(studentProfiles, studentsInfo) 
    //render the studentProfiles hbs content, and fill in the template with data from students
})

router.get('/:name', (req, res) => {
   
    const {name} = req.params
    const profile = 'partials/profile' // this is a link to a hbs partial called profile
    const studentInfo = studentData.students.find(function(element) {
            return element.name == name
        })
    
        console.log('name is :', name)
    // console.log(studentInfo)
    console.log(studentData.students)
      
   
    res.render(profile, studentInfo)
})


module.exports = router