import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://amazon-csg6.onrender.com/api/auth/signup",
        data
      );
      alert(res.data.message || "Signup successful");

      // ✅ Redirect to login page after successful signup
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={data.name}
          required
        /><br /><br />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={data.email}
          type="email"
          required
        /><br /><br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={data.password}
          required
        /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;
