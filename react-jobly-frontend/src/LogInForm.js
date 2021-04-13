import {useState, useEffect} from "react";
function LogInForm() {

  
  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input name="username"></input>
      <label htmlFor="password">Password</label>
      <input name="password"></input>
    </form>
  )
}

export default LogInForm;