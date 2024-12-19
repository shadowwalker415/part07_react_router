import axios from "axios";

const baseUrl = "/api/users";

export const getUsers = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const createUser = async (newUser) => {
  const response = await axios.post(baseUrl, newUser);
  return response.data;
};
