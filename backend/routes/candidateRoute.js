import express from "express";
import {CandidateRegisterController, CandidateUpdateController, deletecandidateController, getcandidatephotocontroller, getcandidatescontroller, getsinglecandidatecontroller} from "../controller/candidateController.js";
import formidable from "express-formidable";

//router object

const candidaterouter = express.Router();

//routing
// REGISTER || Method Post

candidaterouter.post("/candidateregister",formidable(),CandidateRegisterController);

// get voters
candidaterouter.get("/get-candidates",getcandidatescontroller);

// get single candidate using candidateID
candidaterouter.get("/get-single-candidate/:candidateID",getsinglecandidatecontroller);

//get photo
candidaterouter.get("/get-candidate-photo/:candidateID",getcandidatephotocontroller);

//delete candidate
candidaterouter.delete("/delete-candidate/:candidateID",deletecandidateController);

//update candidate
candidaterouter.put("/update-candidate/:candidateID",formidable(),CandidateUpdateController);

export default candidaterouter;