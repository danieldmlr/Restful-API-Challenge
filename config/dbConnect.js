import mongoose from "mongoose";

mongoose.connect("mongodb+srv://daniel:123@api.ifbvf3z.mongodb.net/API-users");
let db = mongoose.connection;

export default db;