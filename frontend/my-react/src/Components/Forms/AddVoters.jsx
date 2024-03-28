import React, { useState } from "react";
import "./Form Css/addCandidate.css";

const AddVoter = () => {
  const [voterData, setVoterData] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      setVoterData({
        ...voterData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setVoterData({ ...voterData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // your backend route
    const response = fetch("http://localhost:3000/voters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(voterData),
    });

    response
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setVoterData({});
    console.log(voterData);
  };
  return (
    <div className="addForm-container">
      <h2>Add Voter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Voter Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Fathers Name"
          name="fathersName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Voter ID"
          name="voterId"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Voter Phone"
          name="phoneNumber"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Voter Photo"
          name="photo"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Voter Address"
          name="address"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Voter Pincode"
          name="pincode"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default AddVoter;
