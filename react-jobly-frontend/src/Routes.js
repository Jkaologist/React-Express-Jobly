import {Switch, Route} from "react-router-dom";
import Companies from "./Companies";
import Homepage from "./Homepage";
import LogInForm from "./LogInForm";
import SignupForm from "./SignupForm";
import CompanyDetail from "./CompanyDetail";
import Jobs from "./Jobs";
import Profile from "./Profile";

function Routes({login, signup, patch, apply}) {

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
        <Route exact path="/profile">
          <Profile patch={patch}/>
        </Route>
        <Route exact path="/companies">
          <Companies />
        </Route>
        <Route exact path="/jobs">
          <Jobs apply={apply}/>
        </Route>
        <Route exact path="/companies/:handle">
          <CompanyDetail apply={apply}/>
        </Route>
      </Switch>
    </div>
  )
}

export default Routes;