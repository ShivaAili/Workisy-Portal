import React from 'react'
import JobCard from './JobCard';
import JobDescription from './JobDescription';
import './JobListings.css';

export default function JobListings() {
    const jobListings = [
        {
            title: 'Website Developer',
            company: 'Walls Asia Architects & Engineers',
            location: 'Hyderabad, Telangana',
            jobTypes: 'Full-time, Permanent',
            totalWork: '1 year (Preferred)',
            posted: '2 days',
        },
        {
            title: 'Software Engineer',
            company: 'Tech Solutions Inc.',
            location: 'Bangalore, Karnataka',
            jobTypes: 'Full-time, Remote',
            totalWork: '2 years (Preferred)',
            posted: '1 week',
        },
        {
            title: 'Frontend Developer',
            company: 'Innovatech',
            location: 'Mumbai, Maharashtra',
            jobTypes: 'Part-time, Contract',
            totalWork: '6 months (Preferred)',
            posted: '3 days',
        },
        {
            title: 'Frontend Developer',
            company: 'Innovatech',
            location: 'Mumbai, Maharashtra',
            jobTypes: 'Part-time, Contract',
            totalWork: '6 months (Preferred)',
            posted: '3 days',
        },
        {
            title: 'Frontend Developer',
            company: 'Innovatech',
            location: 'Mumbai, Maharashtra',
            jobTypes: 'Part-time, Contract',
            totalWork: '6 months (Preferred)',
            posted: '3 days',
        },
        {
            title: 'Frontend Developer',
            company: 'Innovatech',
            location: 'Mumbai, Maharashtra',
            jobTypes: 'Part-time, Contract',
            totalWork: '6 months (Preferred)',
            posted: '3 days',
        },
        {
            title: 'Frontend Developer',
            company: 'Innovatech',
            location: 'Mumbai, Maharashtra',
            jobTypes: 'Part-time, Contract',
            totalWork: '6 months (Preferred)',
            posted: '3 days',
        },
        // Add more job listings as needed
    ];
  return (
    <div className='joblisting-container'>
        <JobCard jobListings={jobListings} />
        <JobDescription />
    </div>
)
}
