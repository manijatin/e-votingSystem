import React, { useState } from "react";
import "./Form Css/addCandidate.css";


const AddCandidate = () => {
  const [candidateData, setCandidateData] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      setCandidateData({
        ...candidateData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setCandidateData({ ...candidateData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // your backend route
    const response = fetch("http://localhost:3000/candidates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidateData),
    });

    response
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setCandidateData({});
    console.log(candidateData);
  };
  return (
    <>

      <div className="addForm-container">
        <h2>Add Candidate</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Candidate Name"
            onChange={handleChange}
            name="name"
          />
          <input type="text" placeholder="Fathers Name" onChange={handleChange} />
          <input
            type="text"
            placeholder="Candidate DOB"
            onChange={handleChange} name="fathersName"
          />
          <input
            type="text"
            placeholder="Candidate Email"
            onChange={handleChange} name="candidateEmail"
          />
          <input
            type="file"
            placeholder="Candidate Photo"
            accept="image/*"
            onChange={handleChange} name="photo"
          />
          <input
            type="text"
            placeholder="Candidate Phone"
            onChange={handleChange} name="candidatePhone"
          />
          <input type="text" placeholder="Party" onChange={handleChange} name="party" />
          <input type="text" placeholder="Category" onChange={handleChange} name="category" />
          <input type="text" placeholder="Pin Code" onChange={handleChange} name="pincode" />
          <input type="text" placeholder="Candidate ID" onChange={handleChange} name="candidateId" />
          <input type="submit" value="Add Candidate" />
        </form>
      </div>

    </>
  );
};

export default AddCandidate;
