//const mongoose = require("mongoose");
import mongoose from "mongoose";
const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    partyName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    constituency: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    candidateID: {
        type: String,
        required: true,
        unique: true
    },
    voteCount: {
        type: Number,
        required: true,
        default: 0
    },
    photo:{
        data: Buffer,
        contentType: String
    },
    role: {
        type: Number,
        deafult: 0
    }
},{timestamps:true});

export default mongoose.model('candidate',candidateSchema);
//module.exports = mongoose.model('Candidate', candidateSchema);
