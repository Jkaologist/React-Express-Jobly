import {useState} from "react";
import {useContext} from "react";
import UserContext from "./UserContext";

function Profile({patch}) {
  const user = useContext(UserContext);

  const [profileData, setProfileData] = useState({
    firstName: `${user.firstName}`,
    lastName: `${user.lastName}`,
    email: `${user.email}`
  })
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {...profileData, username: user.username}
    console.log("Data on Submit", formData)
    patch(formData);
  }
  function handleChange(e) {
    const {name, value} = e.target;
    setProfileData(profileData => ({ ...profileData, [name]: value }));
  }
  return (
    <form id="profileForm" onSubmit={handleSubmit}>
      <p></p>
      <label htmlFor="username">Username</label>
      <p>{user.username}</p>
      <label htmlFor="firstName">First Name</label>
      <input name="firstName" value={profileData.firstName} onChange={handleChange}></input>
      <p></p>
      <label htmlFor="lastName">Last Name</label>
      <input name="lastName" value={profileData.lastName} onChange={handleChange}></input>
      <p></p>
      <label htmlFor="email">Email</label>
      <input name="email" value={profileData.email} onChange={handleChange}></input>
      <p></p>
      <label htmlFor="password">Confirm password to make changes</label>
      <input name="password" value={profileData.password} onChange={handleChange}></input>
      <p></p>
      <button>Update!</button>
    </form>
  )
}

export default Profile;