import {NavLink} from "react-router-dom";
import {useContext} from "react";
import UserContext from "./UserContext";

function NavBar({logOut}) {

  const {loggedIn} = useContext(UserContext);

  return (
    <div>
      { loggedIn ? <div>
        <NavLink to="/">
          Home
        </NavLink>
        <p></p>
        <NavLink to="/companies">
          Companies
        </NavLink>
        <p></p>
        <NavLink to="/jobs">
          Jobs
        </NavLink>
        <p></p>
        <NavLink to="/profile">
          Profile
        </NavLink>
        <p></p>
        <NavLink onClick={logOut} to="/">
          Logout
        </NavLink>
      </div> :
      <div>
        <NavLink to="/login">
          Login
        </NavLink>
        <p></p>
        <NavLink to="/signup">
          Sign Up
        </NavLink>
      </div> }
    </div>
  )
}

export default NavBar;