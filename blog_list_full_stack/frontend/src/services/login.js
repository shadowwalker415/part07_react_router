import axios from "axios";
const baseUrl = "/api/login";

export const login = async (userData) => {
  const response = await axios.post(baseUrl, userData);
  return response.data;
};
