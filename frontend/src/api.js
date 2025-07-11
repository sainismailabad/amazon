// src/api.js
import axios from "axios";

// ✅ LIVE BACKEND URL
const API = axios.create({
  baseURL: "https://amazon-csg6.onrender.com/api",
});

export default API;
