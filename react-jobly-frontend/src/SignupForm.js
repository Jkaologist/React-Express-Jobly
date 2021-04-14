import {useState} from "react";

function SignupForm({signup}) {


  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  })
  function handleSubmit(e) {
    e.preventDefault()
    signup(signupData)
  }
  function handleChange(e) {
    const {name, value} = e.target;
    setSignupData(signupData => ({ ...signupData, [name]: value }));

  }
  return (
    <form id="signupForm">
      <p></p>
      <label htmlFor="username">Username</label>
      <input name="username" value={signupData.username} onChange={handleChange}></input>
      <label htmlFor="password">Password</label>
      <input name="password" value={signupData.password} onChange={handleChange}></input>
      <label htmlFor="firstName">First Name</label>
      <input name="firstName" value={signupData.firstName} onChange={handleChange}></input>
      <label htmlFor="lastName">Last Name</label>
      <input name="lastName" value={signupData.lastName} onChange={handleChange}></input>
      <label htmlFor="email">Email</label>
      <input name="email" value={signupData.email} onChange={handleChange}></input>
      <p></p>
      <button onSubmit={handleSubmit}>Submit!</button>
    </form>
  )
}

export default SignupForm;