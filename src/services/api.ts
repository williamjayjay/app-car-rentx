import axios from "axios";

const api = axios.create({
  baseURL: "http://ADDRESS_IP:3333",
});

export { api };
