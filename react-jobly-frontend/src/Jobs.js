import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useContext} from "react";
import JoblyApi from "./api";
import Loading from "./Loading";
import JobCard from "./JobCard";
import UserContext from "./UserContext";

function Jobs({apply}) {
  const [jobs, setJobs] = useState(null);
  const History = useHistory();
  const user = useContext(UserContext);
  
  useEffect(function makeList() {
    jobsList()
  }, [])

  if (!user.loggedIn) {
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
        <JobCard apply={apply} key={j.id} title={j.title} id={j.id} companyName={j.companyName} salary={j.salary} equity={j.equity}/>
        ))
      }
    </div>
  )
}

export default Jobs;