import { useState } from "react";
import JoblyApi from "./api";
import loading from "./Loading";

function CompanyCard({name, description, logoUrl}) {

  return (
    <div>
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