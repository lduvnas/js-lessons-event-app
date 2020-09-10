import React, { useRef } from "react";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

function App() {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  function logIn() {
    fetch(LOGIN_URL);
  }

  return (
    <div>
      <h1>Event App</h1>
      <div>
        <div>
          <label>
            Email
            <input
              ref={emailInput}
              name="email"
              placeholder="john.doe@company.com"
            />
          </label>
        </div>

        <div>
          <label>
            Password
            <input
              ref={passwordInput}
              name="password"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <button onClick={logIn}>Login</button>
      </div>
    </div>
  );
}

export default App;
