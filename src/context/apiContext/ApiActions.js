import axios from "axios";

// const token = import.meta.env.VITE_ACCESS_TOKEN;
const url = import.meta.env.VITE_GIT_API_URL;

// get user
export const getUser = async (username) => {
  try {
    const response = await axios.get(`${url}/${username}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// get repo
