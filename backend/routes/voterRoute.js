import express from "express";
import {VoterRegisterController, VoterUpdateController, deletevoterController, getsinglevotercontroller, getvoterphotocontroller, getvoterscontroller} from "../controller/voterController.js";
import formidable from "express-formidable";

//router object

const voterrouter = express.Router();

//routing
// REGISTER || Method Post

voterrouter.post("/voterregister",formidable(),VoterRegisterController);

// get voters
voterrouter.get("/get-voters",getvoterscontroller);

// get single voter
voterrouter.get("/get-single-voter/:voterID",getsinglevotercontroller);

//get photo
voterrouter.get("/get-voter-photo/:voterID",getvoterphotocontroller);

//delete voter
voterrouter.delete("/delete-voter/:voterID",deletevoterController);

// update voter
voterrouter.put("/update-voter/:voterID",formidable(),VoterUpdateController);

export default voterrouter;