import axios from "axios";

console.log('env', import.meta.env);

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 15000, // request timeout
});

export default service;
