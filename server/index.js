const express = require('express')
const app = express()
const usersCtrl = require('./usersController')

app.get('/test', (req, res) => {
    res.send('HELLO IS IT ME YOURE LOOKING FOR?')
})

app.get('/api/users', usersCtrl.getAllUsers)
app.get('/api/users/:user_id', usersCtrl.getSingleUser) //:user_id is a param!

app.listen(4444, ()=>console.log('Server listening on port 4444'))