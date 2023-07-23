import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../api/base";

const AppliedStudents = () => {
  const { jobs } = useSelector((state) => state.loadJobs);

  const companyId = "companyId";

  const companyJobs = jobs.filter((job) => job.company_id === companyId);

  const [appliedStudents, setAppliedStudents] = useState({});

  useEffect(() => {
    const fetchAppliedStudents = async () => {
      try {
        const promises = companyJobs.map((job) =>
          axios.get(`/${job.job_id}/appliedby`)
        );

        const responses = await Promise.all(promises);

        const appliedStudentsData = responses.reduce(
          (result, response, index) => {
            const jobId = companyJobs[index].job_id;
            result[jobId] = response.data;
            return result;
          },
          {}
        );

        setAppliedStudents(appliedStudentsData);
      } catch (error) {
        console.error("Error fetching applied students:", error);
      }
    };

    fetchAppliedStudents();
  }, [companyJobs]);

  return (
    <div className="task-page">
      <h3>AppliedStudents</h3>

      {companyJobs.map((job) => (
        <div key={job.job_id}>
          <h2>{job.role_name}</h2>
          <ul>
            {appliedStudents[job.job_id]?.map((student) => (
              <li key={student}>{student}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AppliedStudents;
