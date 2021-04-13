import {NavLink} from "react-router-dom";

function NavBar({isLoggedIn, logOut}) {

  return (
    <div>
      { isLoggedIn() ? <div>
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
        <NavLink to="/logout">
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