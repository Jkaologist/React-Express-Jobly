import { useHistory } from "react-router-dom"

function CompanyCard({handle, name, description, logoUrl}) {
  let History = useHistory()

  function routeToCompany() {
    History.push(`/companies/${handle}`)
  }

  return (
    <div style={{boxShadow: "0px 1px 5px black", padding: "15px", margin: "15px"}} onClick={routeToCompany}>
      <div>
        name: {name}
      </div>
      <div>
        description: {description}
      </div>
      <img src={logoUrl} alt={name}/>
    </div>
  )
}

export default CompanyCard;