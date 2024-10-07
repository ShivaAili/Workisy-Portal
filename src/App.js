import React from "react";
import './App.css'
import FilterDropdowndata from "./Components/Filter/FilterDropdowndata.js";
import JobCard from "./Components/JobDeatils/JobCard.js";
import JobListings from "./Components/JobDeatils/JobListings.js";


const App = () => {
  
  return (
    <div className="App">
        <FilterDropdowndata/>
        <JobListings/>
        {/* <JobDescription/> */}
    </div>
  );
};

export default App;

