const express = require('express')
const router = express.Router()
const fs = require('fs')

const studentData = JSON.parse(fs.readFileSync("studentData.json"));

router.get('/', (req, res) => {
    const studentProfiles = 'partials/index' //this is a link to a hbs partial called index
    
    const studentsInfo = {
        groupType: Object.keys(studentData),
        arrayOfGroup: studentData.students
    }                                     //JSON data taken from studentData.json, contains all student info
    console.log(studentsInfo.arrayOfGroup)
    console.log(studentsInfo.groupType)
    res.render(studentProfiles, studentsInfo) 
    //render the studentProfiles hbs content, and fill in the template with data from students
})

// router.get('/:name', (req, res) => {
//     const {name} = req.params
//     const profile = 'partials/profile' // this is a link to a hbs partial called profile
//     const studentInfo = {
//         //access specific student info from the studentData.json file
//     }
//     res.render(profile, studentInfo)
// })


module.exports = router