import './App.css';
import {useState} from "react"
import {useHistory} from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";
import JoblyApi from "./api";
import UserContext from "./UserContext";
import useLocalStorage from "./hooks/LocalStorage"

function App() {
  const History = useHistory();
  const [user, setUser] = useState({loggedIn: false});
  const {val, setVal} = useLocalStorage("username");

  async function patch(formData) {
    let {username, ...data} = formData;
    let res = await JoblyApi.patchUser(username, data);
    if (!res.error) {
      setUser(user => ({...user, ...res.user}));
      History.push("/companies")
    } else {
    console.alert("You failed to register.")
    }
  }

  async function login(formData) {
    let res = await JoblyApi.login(formData);
    if (!res.error) {
      let resp = await JoblyApi.getUser(formData.username)
      setUser(user => ({...resp.user ,loggedIn: true, token: res}));
      setVal(user.username)
      History.push("/companies");
    } else {
    console.alert("You failed to login.")
    }
  }

  async function apply(jobId) {
    let res = await JoblyApi.applyUser(user.username, jobId);
    if (!res.error) {
      setUser(user => ({...user, applications:[...user.applications, jobId]}));
      History.push("/jobs")
    } else {
    console.alert("You failed to apply.")
    }
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
    console.alert("You failed to register.")
    }
  }


  return (
    <div>
      <UserContext.Provider value={user}>
        <p>Welcome back {val || "NewUser"}! We remembered you in LocalStorage!</p>
        <NavBar logOut={logOut} patch={patch}/>
        <Routes login={login} signup={signup} patch={patch} apply={apply} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
