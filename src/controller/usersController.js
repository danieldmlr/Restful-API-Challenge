import users from "../model/User.js";

class UserController {

    static registerUser = (req, res) => {
        let user = new users(req.body);

        user.save((err) => {
            err ? res.status(500).send('Failed to register user, one or more fields are incorret or must be filled')
                : res.status(201).send(user.toJSON())
        });
    }

    static listUsers = (req, res) => {
        users.find((err, users) => {

            const page = req.query.page;
            const limit = req.query.limit;

            const startIndex = ((page - 1) * limit);
            const endIndex = (page * limit);

            const resultUsers = users.slice(startIndex, endIndex);

            res.status(200).json(resultUsers);

        }).select("-password");
    }

    static listUsersByName = (req, res) => {
        const name = req.query.name;

        users.find({ 'name': { $regex: name } }, {}, (err, users) => {
            
            err ? res.status(404).send('user not found')
                : res.status(200).send(users)

        }).select("-password");
    }

    static listUsersById = (req, res) => {
        const id = req.params.id;

        users.findById(id, (err, users) => {

            err ? res.status(404).send('ID not found')
                : res.status(200).send(users);

        }).select("-password");
    }

    static updateUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            err ? res.status(404).send({ message: err.message })
                : res.status(200).send('User updated succefully!')
        });
    }

    static deleteUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndDelete(id, (err) => {
            err ? res.status(404).send({ message: err.message })
                : res.status(204).send('User was deleted succefully!')
        });
    }

}

export default UserController;