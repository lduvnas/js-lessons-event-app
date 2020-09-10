import React from "react";

function App() {
  function logIn(params) {
    console.log("login");
  }
  return (
    <div>
      <h1>Event App</h1>
      <div>
        <div>
          <label>
            Email <input name="email" placeholder="john.doe@company.com" />
          </label>
        </div>

        <div>
          <label>
            Password{" "}
            <input name="password" type="password" placeholder="password" />
          </label>
        </div>
        <button onClick={logIn}>Login</button>
      </div>
    </div>
  );
}

export default App;
