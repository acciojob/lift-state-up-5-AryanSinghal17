import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = () => {
    setIsLoggedIn(true);
  };

  return (
    <div id="main">
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <>
          <label htmlFor="user-field">Username:</label>
          <input id="user-field" type="text" />

          <br />
          <br />

          <label htmlFor="pass-field">Password:</label>
          <input id="pass-field" type="password" />

          <br />

          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
};

export default App;