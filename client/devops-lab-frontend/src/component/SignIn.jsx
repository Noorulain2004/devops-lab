import React, { useState } from "react";

const SignIn = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) onLogin(email);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        /><br /><br />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
