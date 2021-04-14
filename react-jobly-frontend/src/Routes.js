import {Switch, Route} from "react-router-dom";
import Companies from "./Companies";
import Homepage from "./Homepage";
import LogInForm from "./LogInForm";
import SignupForm from "./SignupForm";
import CompanyDetail from "./CompanyDetail";
import Jobs from "./Jobs";

function Routes({login, isLoggedIn, signup}) {

  return (
    <div>
      <Switch>
        <Route exact path="/">
        <Homepage />
        </Route>
        <Route exact path="/login">
          <LogInForm login={login} />
        </Route>
        <Route exact path="/signup">
          <SignupForm signup={signup}/>
        </Route>
        <Route exact path="/companies">
          <Companies />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/companies/:handle">
          <CompanyDetail />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes;