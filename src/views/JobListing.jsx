import React from "react";
import JobCard from "./JobCard";
import {data as JobList} from "../__MOCK_DATA__/joblist";

const JobListing = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {JobList && JobList?.map((job, i) => (
                <JobCard key={i} width={"w-full"} size={"lg"} fullWidth={true} data={job}/>
            ))}
        </div>
    )
}

export default JobListing;