import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://localhost:3000`,
});

export const getAllUsers = async () => {
  try {
    const users = await axiosInstance.get("/");
    if (users) {
      return Promise.resolve(users.data);
    }
  } catch (error) {
    console.log(error);
  }
};
