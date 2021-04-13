import {NavLink} from "react-router-dom";

function NavBar(props) {

  return (
    <div>
      <NavLink>
        Login
      </NavLink>
      <NavLink>
        Sign Up
      </NavLink>
    </div>
  )
}

export default NavBar;