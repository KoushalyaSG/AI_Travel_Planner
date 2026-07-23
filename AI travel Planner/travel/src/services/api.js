import axios from "axios";

const api = axios.create({
  baseURL: "http://10.145.35.18::5000/api"
,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;