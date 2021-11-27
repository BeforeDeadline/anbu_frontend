import axios from "axios";
import { REACT_APP_BACKEND_URL } from "@env";

export const BACKEND_URL = REACT_APP_BACKEND_URL;

const client = axios.create({
  baseURL: `${BACKEND_URL}`,
  withCredentials: true,
});

export default client;
