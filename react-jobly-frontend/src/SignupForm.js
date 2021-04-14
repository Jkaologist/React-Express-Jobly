import {useState} from "react";

function SignupForm({signup}) {


  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  })
  function handleSubmit(e) {
    e.preventDefault()
    signup(formData)
  }
  function handleChange(e) {
    const {name, value} = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));

  }
  return (
    <form id="signupForm">
      <p></p>
      <label htmlFor="username">Username</label>
      <input name="username" value={formData.username} onChange={handleChange}></input>
      <label htmlFor="password">Password</label>
      <input name="password" value={formData.password} onChange={handleChange}></input>
      <label htmlFor="fname">First Name</label>
      <input name="fname" value={formData.firstName} onChange={handleChange}></input>
      <label htmlFor="lname">Last Name</label>
      <input name="lname" value={formData.lastName} onChange={handleChange}></input>
      <label htmlFor="email">Email</label>
      <input name="email" value={formData.email} onChange={handleChange}></input>
      <p></p>
      <button onSubmit={handleSubmit}>Submit!</button>
    </form>
  )
}

export default SignupForm;