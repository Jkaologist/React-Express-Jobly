import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Link to="/login">
      <button>Login</button>
      </Link>
      <Link to="/signup">
      <button>Sign Up</button>
      </Link>
    </div>
  )
}

export default Homepage;