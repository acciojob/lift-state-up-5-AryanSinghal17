import React from "react";
import "./../styles/App.css";

const App = () => {
  const handleSubmit = () => {
    document.getElementById('main').addEventListener('click',()=>{
      document.getElementById('main').innerHTML = "<p>Your are logged in! </p>"
    })
  };

  return (
    <div id="main">
      <label htmlFor="user-field">Username:</label>
      <input id="user-field" type="text" name="username" />
      
      <br/><br/>
      
      <label htmlFor="pass-field">Password:</label>

      <input id="pass-field" type="password" name="password" />
      
      <br/>
      <button onClick={handleSubmit}>Submit</button> 
    </div>
  );
};


export default App;
