import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
// import AddCandidates from "../Forms/AddCandidates";
// import AddVoters from "../Forms/AddVoters";
import './Viewstates.css';

function Dashboard() {
    
    return (

        <div>
            <div class="main-container">
                <div class="navcontainer">
                    <nav class="nav">
                        <div class="nav-upper-options">
                            <div class="nav-option option1">
                                <h3> Dashboard</h3>
                            </div>

                            <div class="option2 nav-option">
                                <Link to="/EditCandidates"><h3> Edit Candidates</h3></Link>
                            </div>

                            <div class="nav-option option3">
                                <Link to="/EditVoters"><h3> Edit Voters</h3></Link>
                            </div>

                            <div class="nav-option option4">
                                <h3> Result Statistics</h3>
                            </div>

                            <div class="nav-option option5">
                                <h3> Candidate Profile</h3>
                            </div>

                            <div class="nav-option option6">
                                <h3> Settings</h3>
                            </div>

                            <div class="nav-option logout">
                                <h3>Logout</h3>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="result">
                    <div className=" resultoption1 ">
                        <h4> No of Positons  </h4>
                    </div>
                    <div className=" resultoption2 ">
                        <h4> No of Candidates </h4>
                    </div>
                    <div className=" resultoption3 ">
                        <h4> Total Voters </h4>
                    </div>
                    <div className=" resultoption3 ">
                        <h4> Voters Voted </h4>
                    </div>

                </div>
                <div className="stats">
                    <div>
                        <pre>
                            <h3>                                      Here are the voting stats

                            </h3></pre>
                    </div>

                </div>
           
        </div>
        
    );
}

export default Dashboard
