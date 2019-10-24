// const express = require('express')
// const hbs = require('express-handlebars')
// const router = express.Router()

// const studentData = JSON.parse(fs.readFileSync("studentData.json"));

// router.get('/', (req,res) => {
//     const studentProfiles = 'partials/studentIndex' //this is a link to a hbs partial called studentIndex
//     const studentInfo = {
//         students: studentData
//     }                                               //JSON data taken from studentData.json

//     res.render(studentProfiles, studentInfo) //render the studentProfiles hbs content, and fill in the template with data from students
// })

// module.exports = {
//     router: router
// }