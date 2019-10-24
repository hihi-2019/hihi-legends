const express = require('express')
const hbs = require('express-handlebars')
const students = require('./routes/students')
const staff = require('./routes/staff')

const server = express()


// Middleware
server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

server.get('/', (req, res) => {
    //need hbs template for landing page which has links to students and staff
    res.render(home)
  })

server.get('/students', (req, res) => {
    res.send(students)
})

// server.get('/staff', (req, res) => {
//     res.send(staff)
// })



  
module.exports = server