import axios from "axios";

const api = axios.create({
  baseURL: "http://ADDRESS_IP:PORT",
});

export { api };
