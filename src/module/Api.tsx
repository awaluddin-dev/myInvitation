// api.js
import axios from "axios";

const baseURL = "https://api.alabopa.com"; // Update with your server URL

export const getAllComments = async () => {
  try {
    const response = await axios.get(`${baseURL}/allcomment`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export const addComment = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/comment`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};
export const getArdiAllComments = async () => {
  try {
    const response = await axios.get(`${baseURL}/ardiAllComment`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export const addArdiComment = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/ardicomment`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};
