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
      <label htmlFor="username">Username</label>
      <input name="username"></input>
      <label htmlFor="password">Password</label>
      <input name="password"></input>
      <label htmlFor="fname">First Name</label>
      <input name="fname"></input>
      <label htmlFor="lname">Last Name</label>
      <input name="lname"></input>
      <label htmlFor="email">Email</label>
      <input name="email"></input>
    </form>
  )
}

export default SignupForm;