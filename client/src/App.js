import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RequestDetails from './RequestDetails';
import './nn.css';

function App() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('https://hacck4-change-labs-api.vercel.app/labrequests')
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
              {requests.length > 0 ? (
                requests.map(request => (
                  <div className="card" key={request._id}>
                    <h3>{request.title}</h3>
                    <Link to={`/labrequest/${request._id}`} style={{ textDecoration: 'none' }}>
                      <button>View Details</button>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No lab requests available</p>
              )}
            </div>
          } />
          <Route path="/labrequest/:requestId" element={<RequestDetails requests={requests} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
