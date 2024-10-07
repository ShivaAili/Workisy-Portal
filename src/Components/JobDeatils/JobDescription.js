import React from 'react';
import { FaSuitcase, FaMoneyBillAlt, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa'; // Import the icons
import './JobDescription.css';

const jobData = {
  title: 'Website Developer',
  company: 'Walls Asia Architects & Engineers',
  location: 'Hyderabad, Telangana',
  salary: '₹15,000 - ₹35,650 a month',
  skills: [
    { name: 'Web design', icon: <FaCheckCircle /> },
    { name: 'Responsive web design', icon: <FaCheckCircle /> },
    { name: 'Front-end development', icon: <FaCheckCircle /> },
  ],
  education: "Bachelor's degree",
  languages: 'English',
  jobDetails: {
    pay: '₹15,000 - ₹35,650 a month',
    jobType: 'Full-time, Permanent',
    shift: 'Morning shift',
  },
  benefits: [
    { name: 'Cell phone reimbursement', icon: <FaPhoneAlt /> },
    { name: 'Commuter assistance', icon: <FaPhoneAlt /> },
    { name: 'Health insurance', icon: <FaPhoneAlt /> },
    { name: 'Paid sick time', icon: <FaPhoneAlt /> },
  ],
  responsibilities: [
    'Designing and implementing applications',
    'Developing and testing software',
    'Resolving technical issues',
    'Fixing bugs',
  ],
};

const JobListing = () => {
  return (
    <div className="job-listing-container">
      {/* Job Title and Company */}
      <div className="job-header">
        <h1>{jobData.title}</h1>
        <h2>{jobData.company}</h2>
        <p>{jobData.location}</p>
        <p><FaMoneyBillAlt /> {jobData.salary}</p>
        <button className="apply-button">Apply now</button>
      </div>

      {/* Profile Insights Section */}
      <div className='job-scrollbar'>
        <div className="profile-insights">
          <h3>Profile insights</h3>
          <p>Here's how the job qualifications align with your profile.</p>
          <div className="skills">
            <h4>Skills</h4>
            {jobData.skills.map((skill, index) => (
              <p key={index}>
                {skill.icon} {skill.name}
              </p>
            ))}
          </div>
          <div className="experience">
            <p>Do you have experience in Web design?</p>
            <button>Yes</button>
            <button>No</button>
            <button>Skip</button>
          </div>
          <div className="education">
            <h4>Education</h4>
            <p><FaCheckCircle /> {jobData.education}</p>
          </div>
          <div className="languages">
            <h4>Languages</h4>
            <p><FaCheckCircle /> {jobData.languages}</p>
          </div>
        </div>

        {/* Job Details */}
        <div className="job-details">
          <h3>Job details</h3>
          <p><FaMoneyBillAlt /> Pay: {jobData.jobDetails.pay}</p>
          <p><FaSuitcase /> Job type: {jobData.jobDetails.jobType}</p>
          <p><FaCheckCircle /> Shift and schedule: {jobData.jobDetails.shift}</p>
        </div>

        {/* Benefits */}
        <div className="benefits">
          <h3>Benefits</h3>
          <ul>
            {jobData.benefits.map((benefit, index) => (
              <li key={index}>
                {benefit.icon} {benefit.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Full Job Description */}
        <div className="full-job-description">
          <h3>Full job description</h3>
          <p>Responsibilities of candidates include:</p>
          <ul>
            {jobData.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
          <p>Job Types: {jobData.jobDetails.jobType}</p>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
