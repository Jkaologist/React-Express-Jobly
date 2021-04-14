import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import JoblyApi from "./api";
import Loading from "./Loading";
import JobCard from "./JobCard";

function Jobs({isLoggedIn}) {
  const History = useHistory();
  const [jobs, setJobs] = useState(null);
  
  useEffect(function makeList() {
    jobsList()
  }, [])

  if (!isLoggedIn) {
    History.push("/");
  }

  async function jobsList() {
    let jobsL = await JoblyApi.getJobs();
    setJobs(jobsL);
  }

  if (jobs === null) {
    return (<Loading/>);
  }

  return (
    <div>
      {
        jobs.map(j => (
        <JobCard title={j.title} companyName={j.companyName} salary={j.salary} equity={j.equity}/>
        ))
      }
    </div>
  )
}

export default Jobs;