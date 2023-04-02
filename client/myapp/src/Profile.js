import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function Profile() {
  const [userData, setUserData] = useState({
    name: "First Name, Last Name",
    address: "New York",
    email: "fILastName@gmail.com",
    phoneNumber: "2112121212"
  });
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = () => {
    setIsEditing(false);
    sessionStorage.setItem("userInfo", JSON.stringify(userData));
  };
  function reRoute(){
    navigate("/home");
  }
  return (
    <div>
      <header>
        <h1>User Profile</h1>
      </header>
      <main>
        {isEditing ? (
          <form>
            <label>
              Name:
              <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
            </label>
            <label>
              Address:
              <textarea name="address" value={userData.address} onChange={handleInputChange} />
            </label>
            <label>
              Email:
              <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
            </label>
            <label>
              Phone Number:
              <input type="text" name="phoneNumber" value={userData.phoneNumber} onChange={handleInputChange} />
            </label>
            <button onClick={handleSaveButtonClick}>Save</button>
          </form>
        ) : (
          <div>
            <p>Name: {userData.name}</p>
            <p>Address: {userData.address}</p>
            <p>Email: {userData.email}</p>
            <p>Phone Number: {userData.phoneNumber}</p>
            <button onClick={handleEditButtonClick}>Edit</button>
            <button onClick ={reRoute}> Back to Home Page</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Profile;
