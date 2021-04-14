import {useParams, useHistory} from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import JoblyApi from "./api";
import Loading from "./Loading";
import JobCard from "./JobCard";
import UserContext from "./UserContext";

function CompanyDetail() {

  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  const user = useContext(UserContext);
  const History = useHistory();

  useEffect(function makeList() {
    getCompanyDetail();
  },[handle])

  if (!user.loggedIn) {
    History.push("/");
  }

  async function getCompanyDetail() {
    try{
      let companyRes = await JoblyApi.getCompany(handle);
      setCompany(companyRes);
    } catch(e) {
      console.log(e);
    }
  }

  if (company === null) {
    return (<Loading/>);
  }


  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <div>
        {company.jobs.map(job => (
          <JobCard key={job.id} title={job.title} equity={job.equity} salary={job.salary} />
        ))}
      </div>
    </div>
  )
}

export default CompanyDetail;