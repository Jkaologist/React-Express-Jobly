import {NavLink} from "react-router-dom";

function NavBar() {

  return (
    <div>
      <NavLink to="/login">
        Login
      </NavLink>
      <NavLink to="/signup">
        Sign Up
      </NavLink>
    </div>
  )
}

export default NavBar;