import {Switch, Route} from "react-router-dom";
import Homepage from "./Homepage";
import LogInForm from "./LogInForm";
import SignupForm from "./SignupForm";

function Routes({login}) {

  return (
    <div>
      <Switch>
        <Route exact path="/">
        <Homepage />
        </Route>
        <Route exact path="/login">
          <LogInForm login={login}/>
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes;