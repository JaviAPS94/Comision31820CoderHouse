import mongoose from "mongoose";

const userCollection = 'usuarios';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    userName: {type: String, required: true, max: 100},
    password: {type: Number, required: true}
});

export const users = mongoose.model(userCollection, userSchema);