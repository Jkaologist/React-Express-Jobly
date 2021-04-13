import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
function LogInForm({login, isLoggedIn}) {

  const History = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  function handleSubmit(e) {
    e.preventDefault()
    login(formData)
    console.log("is logged in?", isLoggedIn());
    if (isLoggedIn()) {
      History.push("/companies");
    }
  }
  function handleChange(e) {
    const {name, value} = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));

  }
  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input name="username" value={formData.username} onChange={handleChange} required></input>
      <label htmlFor="password">Password</label>
      <input name="password" value={formData.password} onChange={handleChange} required></input>
      <button onSubmit={handleSubmit}>Submit!</button>
    </form>
  )
}

export default LogInForm;