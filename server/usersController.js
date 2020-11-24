const users = require('../data.json')

module.exports = {
    getAllUsers: (req, res) => {
        const {email} = req.query  //QUERY example
        
        if(!email) {
            res.status(200).send(users)
        } else {
            const filteredUsers = users.filter(element => element.email.includes(email))
            res.status(200).send(filteredUsers)
        }
    },
    getSingleUser: (req, res) => {
        const {user_id} = req.params  //PARAM example
        console.log(user_id)
        const user = users.find(element => {
            return element.id === +user_id //the + here converts the user_id, which defaults as a string, to a number
        })

        if(user) {
            res.status(200).send(user)
        } else {
            res.status(404).send('User does not exist')
        }

        res.send('USER')
    },
}