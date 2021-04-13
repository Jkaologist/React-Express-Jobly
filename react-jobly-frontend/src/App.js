import './App.css';
import {useState} from "react"
import {BrowserRouter, Route} from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";
import JoblyApi from "./api";

function App() {
  const [user, setUser] = useState({loggedIn: false});

  async function login(formData) {
    let res = await JoblyApi.login(formData);
    if (!res.error) {
      setUser(user => ({...user, loggedIn: true, token: res}));
    } else {
    console.alert("You failed to login.")
    }
  }


  return (
    <BrowserRouter>
      <NavBar />
      <Routes login={login}/>
    </BrowserRouter>
  );
}

export default App;
