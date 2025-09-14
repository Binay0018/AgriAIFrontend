import axios from "axios";

const Ax = axios.create({
  baseURL: "http://127.0.0.1:8000", // match your FastAPI port
  withCredentials: true,
});

export default Ax;
