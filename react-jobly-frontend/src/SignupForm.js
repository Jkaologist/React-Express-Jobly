import {useState} from "react";

function SignupForm() {

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