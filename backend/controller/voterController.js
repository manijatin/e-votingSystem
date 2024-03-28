import voterModel from "../models/voterModel.js";
import fs from "fs";

export const VoterRegisterController = async(req, res) => {
    try {
            const {name, dateOfBirth, gender, fatherName, voterID, address, pincode, phone} = req.fields;

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
                case !voterID:
                    return res.status(500).send({error:"Voter ID is required."}); 
                case !address:
                    return res.status(500).send({error:"Address is required."});   
                case !pincode:
                    return res.status(500).send({error:"PINCODE is required."});
                case !phone:
                    return res.status(500).send({error:"Phone number is required."});     
                case photo && photo.size > 1000000:
                    return res.status(500).send({error:"Photo is required and should be less than 1 mb."});                            
            }
            //Check voter
            const existingVoter = await voterModel.findOne({voterID});
            //existing voter
            if(existingVoter){
                return res.status(200).send({
                    success: true,
                    message: "Voter already Registered",
                });
            }

            //register user
           // const hashedPassword = await hashPassword(password);

            //save
            const voter = new voterModel({...req.fields});
            if (photo){
                voter.photo.data = fs.readFileSync(photo.path);
                voter.photo.contentType = photo.type;
            }
            await voter.save();

            res.status(201).send({
                success: true,
                message: "Voter Registration Successful.",
                voter
            });
    }catch (error){
            console.log(error)
            res.status(500).send({
                success: false,
                message: "Error in Voter registration.",
                error,
            });
    }
};

// get voters
export const getvoterscontroller = async(req,res) => {
    try{
        const voters = await voterModel.find({}).select("-photo").limit(21).sort({createdAt:-1});
        res.status(200).send({
            success: true,
            countTotal: voters.length,
            message: "All Voters ",
            voters
        });
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message: "Error in getting voters.",
            error: error.message
        });
    }
};

//get single voter using voterID

export const getsinglevotercontroller = async(req,res) => {
    const {voterID} = req.params;
    try{
        const singlevoter = await voterModel.findOne({voterID}).select("-photo");
        if(singlevoter){
        res.status(200).send({
            success: true,
            message: "Single Voter fetched.",
            singlevoter
        });
    }
        else{
            res.status(404).send({
                success: false,
                message: "Voter not found."
            });
        }
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in getting single voter.",
            error
        });
    }
};
//get voter photo
export const getvoterphotocontroller = async(req,res) => {
    const {voterID} = req.params;
    try{
        const voterphoto = await voterModel.findOne({voterID}).select("photo");
        if(voterphoto.photo.data){
            res.set("Content-type",voterphoto.photo.contentType);
            return res.status(200).send(voterphoto.photo.data);
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

// delete voter
export const deletevoterController = async(req,res) => {
    const {voterID} = req.params;
    try{
        await voterModel.findOneAndDelete({voterID}).select();
        res.status(200).send({
            success: true,
            message: "Voter deleted successfully."
        });
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message: "Error while deleting voter",
            error
        });
    }
};

//update voter details

export const VoterUpdateController = async (req, res) => {
    const { voterID } = req.params;
    try {
        const { name, dateOfBirth, gender, fatherName, address, pincode, phone } = req.fields;
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
            case !address:
                return res.status(500).send({ error: "Address is required." });
            case !pincode:
                return res.status(500).send({ error: "PINCODE is required." });
            case !phone:
                return res.status(500).send({ error: "Phone number is required." });
            case photo && photo.size > 1000000:
                return res.status(500).send({ error: "Photo is required and should be less than 1 mb." });
        }

        // Check if voter exists
        const existingVoter = await voterModel.findOne({ voterID });
        if (!existingVoter) {
            return res.status(404).send({
                success: false,
                message: "Voter not found."
            });
        }

        // Update voter details
        const updatedVoter = await voterModel.findOneAndUpdate(
            { voterID },
            {
                $set: {
                    name,
                    dateOfBirth,
                    gender,
                    fatherName,
                    address,
                    pincode,
                    phone
                }
            },
            { new: true }
        );

        if (updatedVoter) {
            // Update photo if provided
            if (photo) {
                updatedVoter.photo.data = fs.readFileSync(photo.path);
                updatedVoter.photo.contentType = photo.type;
            }
            await updatedVoter.save();

            // Send success response
            return res.status(200).send({
                success: true,
                message: "Voter details updated successfully.",
                voter: updatedVoter
            });
        } else {
            // Voter not found
            return res.status(404).send({
                success: false,
                message: "Voter not found."
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in updating voter details.",
            error
        });
    }
};
