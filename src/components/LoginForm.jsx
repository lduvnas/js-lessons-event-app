import React, { useState } from "react";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

export default function LoginForm() {
  const [email, setEmail] = useState("test.user@willandskill.se");
  const [password, setPassword] = useState("js-lesson-10");
  const [token, setToken] = useState(null);

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
    })
      .then(res => res.json())
      .then(data => {
        setToken(data.token);
      });
  }

  return (
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
  );
}
