
// import React, {useState} from 'react';
// import './Clist.css'
// // import Navbar from './Navbar.js';

// function Clist() {
//   const [candidates, setCandidates] = useState([
//     { id: 1, party: 'Bharatiya Janata Party', name: 'Sanat Taori', voteCount: 0, voted: false },
//     { id: 2, party: 'Indian National Congress', name: 'Aniket Narkhede', voteCount: 0, voted: false },
//     { id: 3, party: 'Nationalist Congress Party', name: 'Mandar Patil', voteCount: 0, voted: false },
//     { id: 4, party: 'Shiv Sena', name: 'Akshay Motghare', voteCount: 0, voted: false }
//   ]);
//   const handleVote = (id) => {
//     const updatedCandidates = candidates.map(candidate => {
//       if (candidate.id === id && !candidate.voted) {
//         return { ...candidate, voteCount: candidate.voteCount + 1, voted: true };
//       }
//       return candidate;
//     });
//     setCandidates(updatedCandidates);
//     // Alert for first-time voting
//     if (!candidates.find(candidate => candidate.voted)) {
//       alert('Are you sure you want to vote? This action is final.');
//     }
//     // Alert for successful voting
//     alert('Voted successfully!');
//   };
//   return (
//     <>

//       <main>
//         <div className="container">
//           <h1 className='h1tag'>Candidate List</h1>
//           <table>
//             <thead>
//               <tr>
//                 <th>Election Symbol</th>
//                 <th>Party</th>
//                 <th>Candidate Name</th>
//                 <th>Vote</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr>
//                 <td className='img1'><img src="/images/bjp.png" alt=" " /></td>
//                 <td>Bharatiya Janata Party</td>
//                 <td>Sanat Taori</td>
//                 <td><button type="submit" name="action" onClick={handleVote}>Vote</button></td>
//               </tr>
//               <tr>
//                 <td className='img1'><img src="/images/cong.png" alt=" " /></td>
//                 <td>Indian National Congress</td>
//                 <td>Aniket Narkhede</td>
//                 <td><button type="submit" name="action" onClick={handleVote}>Vote</button></td>
//               </tr>
//               <tr>
//                 <td className='img1'><img src="/images/rsc.png" alt=" " /></td>
//                 <td>Nationalist Congress Party</td>
//                 <td>Mandar Patil</td>
//                 <td><button type="submit" name="action" onClick={handleVote}>Vote</button></td>
//               </tr>
//               <tr>
//                 <td className='img1'><img src=" /images/shiv.png" alt=" " /></td>
//                 <td>Shiv Sena</td>
//                 <td>Akshay Motghare</td>
//                 <td><button type="submit" name="action" onClick={handleVote}>Vote</button></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </main>


//     </>
//   );
// }

// export default Clist;
import React, { useState } from 'react';
import './Page Css/Clist.css'
// import Navbar from './Navbar.js';

function Clist() {
  const [candidates, setCandidates] = useState([
    { id: 1, party: 'Bharatiya Janata Party', name: 'Sanat Taori', voteCount: 0, voted: false },
    { id: 2, party: 'Indian National Congress', name: 'Aniket Narkhede', voteCount: 0, voted: false },
    { id: 3, party: 'Nationalist Congress Party', name: 'Mandar Patil', voteCount: 0, voted: false },
    { id: 4, party: 'Shiv Sena', name: 'Akshay Motghare', voteCount: 0, voted: false }
  ]);

  const handleVote = (id) => {
    const updatedCandidates = candidates.map(candidate => {
      if (candidate.id === id && !candidate.voted) {
        return { ...candidate, voteCount: candidate.voteCount + 1, voted: true };
      }
      return candidate;
    });
    setCandidates(updatedCandidates);
    // Alert for first-time voting
    if (!candidates.find(candidate => candidate.voted)) {
      alert('Are you sure you want to vote? This action is final.');
    }
    // Alert for successful voting
    alert('Voted successfully!');
  };

  return (
    <>
      <main>
        <div className="container">
          <h1 className='h1tag'>Candidate List</h1>
          <table>
            <thead>
              <tr>
                <th>Election Symbol</th>
                <th>Party</th>
                <th>Candidate Name</th>
                <th>Vote</th>
              </tr>
            </thead>

            <tbody>
              {candidates.map(candidate => (
                <tr key={candidate.id}>
                  <td className='img1'><img src={`/images/${candidate.party.toLowerCase()}.png`} alt=" " /></td>
                  <td>{candidate.party}</td>
                  <td>{candidate.name}</td>
                  <td>
                    <button type="button" disabled={candidate.voted || candidates.some(c => c.voted)} onClick={() => handleVote(candidate.id)}>
                      {candidate.voted ? 'Voted' : 'Vote'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Clist;


