function JobCard({title, equity, salary, companyName=undefined}) {
  return (
    
    <div style={{boxShadow: "0px 1px 5px black", padding: "15px", margin: "15px"}} >
      <h2>{title}</h2>
      {companyName ? <h3>{companyName}</h3> : null}
      <p>{equity}</p>
      <p>{salary}</p>
    </div>
  )
}

export default JobCard;