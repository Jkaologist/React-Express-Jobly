import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import JoblyApi from "./api";
import Loading from "./Loading";
import CompanyCard from "./CompanyCard";

function Companies({isLoggedIn}) {
  const History = useHistory();
  const [companies, setCompanies] = useState(null);
  
  useEffect(function makeList() {
    companyList()
  }, [])

  if (!isLoggedIn) {
    History.push("/");
  }

  async function companyList() {
    let companiesList = await JoblyApi.getCompanies();
    setCompanies(companiesList);
  }

  if (companies === null) {
    return (<Loading/>);
  }


  return (
    <div>
      {
        companies.map(c => (
        <CompanyCard name={c.name} description={c.description} logoUrl={c.logoUrl}/>
        ))
      }
    </div>
  )
}

export default Companies;