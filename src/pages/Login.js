import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const BASE_URL = "https://app-builder-backend-w1v2.onrender.com";

  // 🔐 LOGIN
  const handleLogin = async () => {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      alert("Login successful ✅");
      onLogin();
    } else {
      alert("Invalid credentials ❌");
    }
  };

  // 🆕 REGISTER (FIXED HERE)
  const handleRegister = async () => {
    const res = await fetch(`${BASE_URL}/register`, {  // ✅ FIX
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      alert("User registered ✅ Now login");
    } else {
      alert("Registration failed ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
      <br /><br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Login;