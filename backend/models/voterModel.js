//const mongoose = require("mongoose");
import mongoose from "mongoose";

// Define the schema for the Voters collection
const voterSchema = new mongoose.Schema({
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
  voterID: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  voteCasted: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String,
    required: true
  },
  photo: {
    data: Buffer,
    contentType: String
  },
  role:{
    type: Number,
    default:0,
  },
},{timestamps:true});

export default mongoose.model('Voter',voterSchema);

// Create the Voters model
//const Voter = mongoose.model('Voter', voterSchema);

//module.exports = Voter;
