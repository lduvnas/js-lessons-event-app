import React, { useState } from "react";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function logIn() {
    const payload = {
      email: email,
      password: password
    };

    fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
  }

  return (
    <div>
      <h1>Event App</h1>
      <div>
        <div>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={email}
              onChange={event => setEmail(event.currentTarget.value)}
              placeholder="john.doe@company.com"
            />
          </label>
        </div>

        <div>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={event => setPassword(event.currentTarget.value)}
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
