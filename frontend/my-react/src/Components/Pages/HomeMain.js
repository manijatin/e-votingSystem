import React from 'react';
import { Link } from 'react-router-dom';

function HomeMain() {
    return (
        <>
            <div className="content">
                <div className="image">
                    <img src="Voting.png" alt="Voting" />
                </div>
                <div className="info">
                    <div className="heading">
                        <h1>Online System</h1>
                        <h2>"Vote for Future"</h2>
                    </div>
                    {/* <p className='pretext'>
                        <pre>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor in cididunt ut labore
                            et dolore magna aliqua.
                        </pre>
                    </p> */}
                    <Link to="/Login"><button className="vote-btn">Vote Now</button></Link>
                </div>
            </div>           
        </>
    )
}

export default HomeMain
