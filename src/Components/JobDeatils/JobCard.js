// JobCard.js
import React from 'react';
import './JobCard.css'; // Import the CSS file

const JobCard = ({ jobListings }) => {
    return (
        <div className="job-cards-container">
            {jobListings.map((job, index) => (
                <div className="card" key={index}>
                    <h3>{job.title}</h3>
                    <p>{job.company}</p>
                    <p>{job.location}</p>
                    <ul>
                        <li>Job Types: {job.jobTypes}</li>
                        <li>Total work: {job.totalWork}</li>
                    </ul>
                    <p className="posted">Posted {job.posted} ago</p>
                </div>
            ))}
        </div>
    );
};

export default JobCard;
