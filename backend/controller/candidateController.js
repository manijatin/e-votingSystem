import candidateModel from "../models/candidateModel.js";
import fs from "fs";

export const CandidateRegisterController = async(req, res) => {
    try {
            const {name, dateOfBirth, gender, fatherName, partyName, category, constituency, pincode, candidateID} = req.fields;

            const{photo} = req.files;

            //Validation
            switch(true){
                case !name:
                    return res.status(500).send({error:"Name is required."});
                case !dateOfBirth:
                    return res.status(500).send({error:"Date of birth is required."}); 
                case !gender:
                    return res.status(500).send({error:"Gender is required."});    
                case !fatherName:
                    return res.status(500).send({error:"Name of father is required."}); 
                case !candidateID:
                    return res.status(500).send({error:"Candidate ID is required."}); 
                case !partyName:
                    return res.status(500).send({error:"Name of the Party is required."});   
                case !pincode:
                    return res.status(500).send({error:"PINCODE is required."});
                case !constituency:
                    return res.status(500).send({error:"Constituency is required."});   
                case !category:
                    return res.status(500).send({error:"Category is required."});     
                case photo && photo.size > 1000000:
                    return res.status(500).send({error:"Photo is required and should be less than 1 mb."});                            
            }
            //Check voter
            const existingCandidate = await candidateModel.findOne({candidateID});
            //existing voter
            if(existingCandidate){
                return res.status(200).send({
                    success: true,
                    message: "Candidate already Registered",
                });
            }

            //register user
           // const hashedPassword = await hashPassword(password);

            //save
            const candidate = new candidateModel({...req.fields});
            if (photo){
                candidate.photo.data = fs.readFileSync(photo.path);
                candidate.photo.contentType = photo.type;
            }
            await candidate.save();

            res.status(201).send({
                success: true,
                message: "Candidate Registration Successful.",
                candidate
            });
    }catch (error){
            console.log(error)
            res.status(500).send({
                success: false,
                message: "Error in Candidate registration.",
                error,
            });
    }
};

// get candidates
export const getcandidatescontroller = async(req,res) => {
    try{
        const candidates = await candidateModel.find({}).select("-photo").limit(21).sort({createdAt:-1});
        res.status(200).send({
            success: true,
            countTotal: candidates.length,
            message: "All Candidates ",
            candidates
        });
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message: "Error in getting candidates.",
            error: error.message
        });
    }
};

//get single candidate using candidateID
export const getsinglecandidatecontroller = async(req,res) => {
    const {candidateID} = req.params;
    try{
        const singlecandidate = await candidateModel.findOne({candidateID}).select("-photo");
        if(singlecandidate){
        res.status(200).send({
            success: true,
            message: "Single Candidate fetched.",
            singlecandidate
        });}
        else{
            res.status(404).send({
                success: false,
                message: "Candidate not found."
            });
        }
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in getting single candidate.",
            error
        });
    }
};

//get candidate photo
export const getcandidatephotocontroller = async(req,res) => {
    const {candidateID} = req.params;
    try{
        const candidatephoto = await candidateModel.findOne({candidateID}).select("photo");
        if(candidatephoto.photo.data){
            res.set("Content-type",candidatephoto.photo.contentType);
            return res.status(200).send(candidatephoto.photo.data);
        }
    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error while getting Voter photo",
            error
        });
    }
};

// delete candidate
export const deletecandidateController = async(req,res) => {
    const {candidateID} = req.params;
    try{
        await candidateModel.findOneAndDelete({candidateID}).select();
        res.status(200).send({
            success: true,
            message: "Candidate deleted successfully."
        });
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message: "Error while deleting candidate",
            error
        });
    }
};

// update candidate details

export const CandidateUpdateController = async (req, res) => {
    const { candidateID } = req.params;
    try {
        const { name, dateOfBirth, gender, fatherName, partyName, category, constituency, pincode } = req.fields;
        const { photo } = req.files;

        // Validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is required." });
            case !dateOfBirth:
                return res.status(500).send({ error: "Date of birth is required." });
            case !gender:
                return res.status(500).send({ error: "Gender is required." });
            case !fatherName:
                return res.status(500).send({ error: "Name of father is required." });
            case !partyName:
                return res.status(500).send({ error: "Address is required." });
            case !pincode:
                return res.status(500).send({ error: "PINCODE is required." });
            case !category:
                return res.status(500).send({ error: "Phone number is required." });

            case !constituency:
                return res.status(500).send({ error: "Phone number is required." });
        
            case photo && photo.size > 1000000:
                return res.status(500).send({ error: "Photo is required and should be less than 1 mb." });
        }

        // Check if voter exists
        const existingCandidate = await candidateModel.findOne({ candidateID });
        if (!existingCandidate) {
            return res.status(404).send({
                success: false,
                message: "Candidate not found."
            });
        }

        // Update voter details
        const updatedCandidate = await candidateModel.findOneAndUpdate(
            { candidateID },
            {
                $set: {
                    name,
                    dateOfBirth,
                    gender,
                    fatherName,
                    partyName, 
                    category,
                    constituency,
                    pincode,
                }
            },
            { new: true }
        );

        if (updatedCandidate) {
            // Update photo if provided
            if (photo) {
                updatedCandidate.photo.data = fs.readFileSync(photo.path);
                updatedCandidate.photo.contentType = photo.type;
            }
            await updatedCandidate.save();

            // Send success response
            return res.status(200).send({
                success: true,
                message: "Candidate details updated successfully.",
                candidate: updatedCandidate
            });
        } else {
            // Voter not found
            return res.status(404).send({
                success: false,
                message: "Candidate not found."
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in updating candidate details.",
            error:error.message
        });
    }
};
