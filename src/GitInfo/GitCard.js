import React, { useState } from "react";
import './GitCard.css'
function GitCard() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    setUserData(data);
  };

  return (
    <div className="MainContainer">
      <form onSubmit={handleFormSubmit} className="GitInfoCard">
        <h1 style={{border:"2px solid black",borderRadius:"5px" ,backgroundColor:"gainsboro"}}>Git Information</h1>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="Enter User Name"
        ></input>
        <button type="submit">GitInfo</button>
        </form>
        {userData && (
          <>
            <div className="UserDetails">
              <img src={userData.avatar_url} style={{borderRadius:"50%"}} alt="Avatar" />
              <h4>{userData.login}</h4>
              <h4>
                {userData.name
                  ? `Name: ${userData.name}`
                  : "Name: Not available"}
              </h4>
              <h4>Public Repositories: {userData.public_repos}</h4>
              <h4>Public Gists: {userData.public_gists}</h4>
              <h4>Profile Created At: {userData.created_at}</h4>
            </div>
          </>
        )}
    </div>
  );
}

export default GitCard;