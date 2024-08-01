// // RequestDetails.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './my.css'; // Ensure this import is included to apply CSS styles

// function RequestDetails({ requests }) {
//   const { requestId } = useParams();
//   const request = requests.find(req => req._id === requestId);

//   if (!request) {
//     return <div>Request not found</div>;
//   }

//   const handleStatusChange = (status) => {
//     axios.patch(`http://localhost:5000/requests/${request._id}`, { status })
//       .then(response => {
//         alert(`Request status updated to ${status}`);
//         window.location.reload(); // Reload the page to see the updated status
//       })
//       .catch(error => {
//         console.error('Error updating request status:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Request Details</h2>
//       <p><strong>Title:</strong> {request.title}</p>
//       <p><strong>Sender:</strong> {request.details.sender}</p>
//       <p><strong>Requirements:</strong> {request.details.requirements}</p>
//       <p><strong>Status:</strong> {request.status}</p>
//       <div className="request-buttons">
//         <button onClick={() => handleStatusChange('ACCEPTED')}>ACCEPT</button>
//         <button onClick={() => handleStatusChange('REJECTED')}>REJECT</button>
//       </div>
//     </div>
//   );
// }

// export default RequestDetails;

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './my.css'; // Ensure this import is included to apply CSS styles

// function RequestDetails({ requests }) {
//   const { requestId } = useParams();
//   const request = requests.find(req => req._id === requestId);

//   if (!request) {
//     return <div>Request not found</div>;
//   }

//   const handleStatusChange = (status) => {
//     axios.patch(`http://localhost:5004/labrequests/${request._id}`, { status })
//       .then(response => {
//         alert(`Request status updated to ${status}`);
//         window.location.reload(); // Reload the page to see the updated status
//       })
//       .catch(error => {
//         console.error('Error updating request status:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Request Details</h2>
//       <p><strong>Title:</strong> {request.title}</p>
//       <p><strong>Sender:</strong> {request.details.sender}</p>
//       <p><strong>Requirements:</strong> {request.details.requirements}</p>
//       <p><strong>Status:</strong> {request.status}</p>
//       <div className="request-buttons">
//         <button onClick={() => handleStatusChange('ACCEPTED')}>ACCEPT</button>
//         <button onClick={() => handleStatusChange('REJECTED')}>REJECT</button>
//       </div>
//     </div>
//   );
// }

// export default RequestDetails;

import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './nn.css'; // Ensure this import is included to apply CSS styles

function RequestDetails({ requests }) {
  const { requestId } = useParams();
  const request = requests.find(req => req._id === requestId);

  if (!request) {
    return <div>Request not found</div>;
  }

  const handleStatusChange = (status) => {
    axios.patch(`http://localhost:5004/labrequests/${request._id}`, { status })
      .then(response => {
        alert(`Request status updated to ${status}`);
        window.location.reload(); // Reload the page to see the updated status
      })
      .catch(error => {
        console.error('Error updating request status:', error);
      });
  };

  return (
    <div className="details-card">
      <h2>Request Details</h2>
      <p><strong>Title:</strong> {request.title}</p>
      <p><strong>Sender:</strong> {request.details.sender}</p>
      <p><strong>Requirements:</strong> {request.details.requirements}</p>
      <p><strong>Status:</strong> {request.status}</p>
      <div className="request-buttons">
        <button onClick={() => handleStatusChange('ACCEPTED')} className='accept-btn'>ACCEPT</button>
        <button onClick={() => handleStatusChange('REJECTED')} className='reject-btn'>REJECT</button>
      </div>
    </div>
  );
}

export default RequestDetails;
