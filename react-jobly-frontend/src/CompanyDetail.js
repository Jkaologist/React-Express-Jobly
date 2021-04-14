import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import JoblyApi from "./api";
import Loading from "./Loading";
import JobCard from "./JobCard";

function CompanyDetail() {

  const {handle} = useParams();
  console.log("handle:", handle);
  const [company, setCompany] = useState(null);

  useEffect(function makeList() {
    console.log("in the useEffect");
    getCompanyDetail();
  }, [handle])

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
      <p>{company.detail}</p>
      <div>
        {company.jobs.map(job => (
          <JobCard key={job.id} title={job.title} equity={job.equity} salary={job.salary} />
        ))}
      </div>
    </div>
  )
}

export default CompanyDetail;