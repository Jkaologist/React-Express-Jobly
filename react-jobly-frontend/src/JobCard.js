import {useContext} from "react";
import UserContext from "./UserContext";

function JobCard({title, apply, equity, salary, id, companyName=undefined}) {

  const user = useContext(UserContext);

  console.log("This is the user,", user);
  return (
    <div style={{boxShadow: "0px 1px 5px black", padding: "15px", margin: "15px"}} >
      <h2>{title}</h2>
      {companyName ? <h3>{companyName}</h3> : null}
      <p>{equity}</p>
      <p>{salary}</p>
      {user.applications.includes(id)? <p>Applied</p> : <button onClick={()=> apply(id)} >Apply</button>}
    </div>
  )
}

export default JobCard;