import axios from "axios";

const mockApi = axios.create({
  baseURL: "https://63fcc265677c41587313342e.mockapi.io/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default mockApi;
