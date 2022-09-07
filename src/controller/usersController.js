import users from "../model/User.js";

class UserController {

    static registerUser = (req, res) => {
        let user = new users(req.body);

        user.save((err) => {
            err ? res.status(500).send("Failed to register user, one or more required fields must be filled")
                : res.status(201).send(user.toJSON())
        })
    }

    static listUsers = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(users)
        })
    }
}

export default UserController;