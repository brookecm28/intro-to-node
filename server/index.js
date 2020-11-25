const express = require('express')
const app = express()
const usersCtrl = require('./usersController')

app.use(express.json()) //this is called (a top-level) Middleware and will be required for all servers moving forward
//every single request that passes through our server will pass through this middleware
//JSON parses the body
//this allows us to use .put and .post

app.get('/test', (req, res) => {
    res.send('HELLO IS IT ME YOURE LOOKING FOR?')
})

app.get('/api/users', usersCtrl.getAllUsers)
app.get('/api/users/:user_id', usersCtrl.getSingleUser) //:user_id is a param!
app.post('/api/users', usersCtrl.addUser) //post will add!
app.put('/api/users/:user_id', usersCtrl.editUser) //param is needed so we can target a specific user rather than the entire database (or array in this case)
app.delete('/api/users/:user_id', usersCtrl.deleteUser)

app.listen(4444, ()=>console.log('Server listening on port 4444'))