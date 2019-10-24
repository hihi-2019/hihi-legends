const express = require('express')
const hbs = require('express-handlebars')
const router = express.Router()
const fs = require('fs')

const staffData = JSON.parse(fs.readFileSync("staffData.json"));

router.get('/', (req,res) => {
    const staffProfiles = 'partials/index' //this is a link to a hbs partial called index

    const staffInfo = {
        staff: staffData
    }                                               //JSON data taken from studentData.json, contains all student info

    res.render(staffProfiles, staffInfo) //render the studentProfiles hbs content, and fill in the template with data from students
})

router.get('/:name', (req, res) => {
    const {name} = req.params
    const profile = 'partials/profile' // this is a link to a hbs partial called profile
    const staffInfo = {
        //access specific student info from the studentData.json file
    }
    res.render(profile, staffInfo)
})


module.exports = {
    router: router
}