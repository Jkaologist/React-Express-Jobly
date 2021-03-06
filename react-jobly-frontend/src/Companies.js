import {useState, useEffect, useContext} from "react";
import {useHistory} from "react-router-dom";
import JoblyApi from "./api";
import Loading from "./Loading";
import CompanyCard from "./CompanyCard";
import UserContext from "./UserContext";

function Companies() {
  const History = useHistory();
  const [companies, setCompanies] = useState(null);
  const user = useContext(UserContext);
  
  useEffect(function makeList() {
    companyList()
  }, [])

  if (!user.loggedIn) {
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
        <CompanyCard key={c.handle} handle={c.handle} name={c.name} description={c.description} logoUrl={c.logoUrl}/>
        ))
      }
    </div>
  )
}

export default Companies;