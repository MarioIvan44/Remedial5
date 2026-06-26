/**
 * fields:
 * name
 * email
 * password
 * phone
 * isVerified
 * loginAttempts
 * timeOut
 */


import mongoose, { Schema, model } from "mongoose"

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    loginAttempts: {
        type: Number,
        default: 0
    },
    timeOut: {
        type: Date
    }
}, {
    // timestamps: true, add automatically createdAt and updatedAt fields to the collection documents, which makes it easier to track when records were created or modified.
    timestamps: true,
    // strict: false, allows adding additional fields to the collection documents, which makes it easier to have flexibility in the data structure.
    strict: false
})

//"Users" is the name of the collection that is saved in the DB
export default model("Users", usersSchema)