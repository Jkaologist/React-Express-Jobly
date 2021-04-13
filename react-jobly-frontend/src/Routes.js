import {Switch, Route} from "react-router-dom";
import Companies from "./Companies";
import Homepage from "./Homepage";
import LogInForm from "./LogInForm";
import SignupForm from "./SignupForm";

function Routes({login, isLoggedIn, signup}) {

  return (
    <div>
      <Switch>
        <Route exact path="/">
        <Homepage />
        </Route>
        <Route exact path="/login">
          <LogInForm login={login} isLoggedIn={isLoggedIn}/>
        </Route>
        <Route exact path="/signup">
          <SignupForm signup={signup}/>
        </Route>
        <Route exact path="/companies">
          <Companies isLoggedIn={isLoggedIn}/>
        </Route>
      </Switch>
    </div>
  )
}

export default Routes;