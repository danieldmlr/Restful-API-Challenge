import express  from "express";
import db from "../config/dbConnect.js";

db.on("error", console.log.bind(console, 'connection error'))
db.once("open", () => {
    console.log('connection successful!')
})

const app = express();

app.use(express.json());

export default app