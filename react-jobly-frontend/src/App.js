import './App.css';
import {useState} from "react"
import {useHistory} from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";
import JoblyApi from "./api";
import UserContext from "./UserContext";

function App() {
  const History = useHistory();

  const [user, setUser] = useState({loggedIn: false});


  async function login(formData) {
    let res = await JoblyApi.login(formData);
    if (!res.error) {
      setUser(user => ({...user, loggedIn: true, token: res}));
      History.push("/companies");

    } else {
    console.alert("You failed to login.")
    }
  }

  function isLoggedIn() {
    return user.loggedIn
  }

  function logOut(e) {
    e.preventDefault();
    setUser(user => ({loggedIn:false}));
  }

  async function signup(formData) {
    let res = await JoblyApi.signup(formData);
    if (!res.error) {
      setUser(user => ({...user, loggedIn: true, token: res}));
    } else {
    console.alert("You failed to login.")
    }
  }


  return (
    <div>
      <UserContext.Provider value={user}>
        <NavBar logOut={logOut} isLoggedIn={isLoggedIn}/>
        <Routes login={login} signup={signup} isLoggedIn={isLoggedIn} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
