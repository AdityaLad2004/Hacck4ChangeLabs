// // // App.js
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import RequestDetails from './RequestDetails';
// // import './my.css';

// // function App() {
// //   const [requests, setRequests] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:5000/requests')
// //       .then(response => setRequests(response.data))
// //       .catch(error => console.error('Error fetching requests:', error));
// //   }, []);

// //   return (
// //     <Router>
// //       <div>
// //         <h1>Lab Requests</h1>
// //         <Routes>
// //           <Route exact path="/" element={
// //             <ul>
// //               {requests.map(request => (
// //                 <li key={request._id}>
// //                   <Link to={`/request/${request._id}`}>{request.title}</Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           } />
// //           <Route path="/request/:requestId" element={<RequestDetails requests={requests} />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// // App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import RequestDetails from './RequestDetails';
// import './my.css';

// function App() {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/requests')
//       .then(response => setRequests(response.data))
//       .catch(error => console.error('Error fetching requests:', error));
//   }, []);

//   return (
//     <Router>
//       <div>
//         <h1>Lab Requests</h1>
//         <Routes>
//           <Route exact path="/" element={
//             <ul>
//               {requests.map(request => (
//                 <li key={request._id}>
//                   <Link to={`/request/${request._id}`} style={{ textDecoration: 'none' }}>
//                     <button>{request.title}</button>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           } />
//           <Route path="/request/:requestId" element={<RequestDetails requests={requests} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import RequestDetails from './RequestDetails';
// import './my.css';

// function App() {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5004/labrequests')
//       .then(response => setRequests(response.data))
//       .catch(error => console.error('Error fetching requests:', error));
//   }, []);

//   return (
//     <Router>
//       <div>
//         <h1>Lab Requests</h1>
//         <Routes>
//           <Route exact path="/" element={
//             <ul>
//               {requests.map(request => (
//                 <li key={request._id}>
//                   <Link to={`/labrequest/${request._id}`} style={{ textDecoration: 'none' }}>
//                     <button>{request.title}</button>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           } />
//           <Route path="/labrequest/:requestId" element={<RequestDetails requests={requests} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RequestDetails from './RequestDetails';
import './nn.css';

function App() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5004/labrequests')
      .then(response => setRequests(response.data))
      .catch(error => console.error('Error fetching requests:', error));
  }, []);

  return (
    <Router>
      <div className="container">
        <h1>Lab Requests</h1>
        <Routes>
          <Route exact path="/" element={
            <div className="cards">
              {requests.map(request => (
                <div className="card" key={request._id}>
                  <h3>{request.title}</h3>
                  <Link to={`/labrequest/${request._id}`} style={{ textDecoration: 'none' }}>
                    <button>View Details</button>
                  </Link>
                </div>
              ))}
            </div>
          } />
          <Route path="/labrequest/:requestId" element={<RequestDetails requests={requests} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

