import React from 'react';

const ComplaintComponent = ({ complaint }) => {
  return (
    <div className="complaint">
      <h3>{complaint.title}</h3>
      <p>{complaint.body}</p>
      {complaint.image && <img src={complaint.image} alt="Complaint" />}
    </div>
  );
};

export default ComplaintComponent;
