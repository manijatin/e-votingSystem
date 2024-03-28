import React from 'react'
import './Viewstates.css';
function Dashboard(){


    return (

        <div className="App">
            

            <div className="main-container">
                <div className="navcontainer">
                    <nav className="nav">
                        <div className="nav-upper-options">
                            <div className="nav-option option1">

                                <h3> Dashboard</h3>
                            </div>

                            <div className="option2 nav-option">

                                <h3> Edit Candidates</h3>
                            </div>

                            <div className="nav-option option3">

                                <h3> Edit Voters</h3>
                            </div>

                            <div className="nav-option option4">

                                <h3> Result Statistics</h3>
                            </div>

                            <div className="nav-option option5">

                                <h3> Candidate Profile</h3>
                            </div>

                            <div className="nav-option option6">

                                <h3> Settings</h3>
                            </div>

                            {/* <div className="nav-option logout">
                                <h3>Logout</h3>
                            </div> */}

                        </div>
                    </nav>
                </div>
           </div>


            <div className="result">
                     <div className= " resultoption1 "> 
                     <h4> No of Positons  </h4>
                     </div>
                     <div className= " resultoption2 ">  
                     <h4> No of Candidates </h4>
                     </div>
                     <div className= " resultoption3 ">
                     <h4> Total Voters </h4>
                     </div>
                     <div className= " resultoption3 ">
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