import {Switch, Route} from "react-router-dom";
import Homepage from "./Homepage";
import LogInForm from "./LogInForm";
import SignupForm from "./SignupForm";

function Routes() {

  return (
    <div>
      <Switch>
    
        <Route exact path="/">
        <Homepage />
        </Route>
        <Route>
          <LogInForm />
        </Route>
        <Route>
          <SignupForm />
        </Route>

      </Switch>
    </div>
  )
}

export default Routes;