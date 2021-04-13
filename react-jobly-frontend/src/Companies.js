import {useHistory} from "react-router-dom";

function Companies({isLoggedIn}) {
  const History = useHistory();
  
  if (!isLoggedIn) {
    History.push("/");
  }

  return (
    <div>
      <h2>Companies</h2>
    </div>
  )
}

export default Companies;