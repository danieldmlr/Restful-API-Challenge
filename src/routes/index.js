import express from "express";
import users from "./usersRoutes.js";

const routes = (app) => {
    
    app.route('/').get((req, res) => {
        res.status(200).send("SERVER ONLINE!")
    })

    app.route('/api').get((req, res) => {
        res.status(200).send("Proceed to current API version(v1)")
    })

    app.route('/api/v1').get((req, res) => {
        res.status(200).send("Current API version!")
    })

    app.use(
        express.json(),
        users
    )
}

export default routes;