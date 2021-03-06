import axios from "axios";

const API = axios.create({
  baseURL: "https://api-dev.trysolstice.com/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((req) => {
  req.headers.Authorization = "Bearer zUKWzuo6UBFT-nu4HVmk";

  return req;
});

export const getCurrentUser = () => API.get("/users/me");
export const getCurrentHousehold = (residenceID) =>
  API.get(`/households/${residenceID}`);
