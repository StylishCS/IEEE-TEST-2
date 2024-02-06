import axios from "axios";
import { getAuthUser } from "./Storage";
axios.defaults.headers.common["Authorization"] = `IEEE ${
  getAuthUser() ? getAuthUser().token :""
}`;

axios.defaults.baseURL = "https://ieee-backend-06597876c603.herokuapp.com";
axios.defaults.withCredentials = true;
const http = {
  GET: async (url, config = {}) => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      // Handle error
      console.error("GET request error:", error);
      throw error;
    }
  },

  POST: async (url, data = {}, config = {}) => {
    try {
      const response = await axios.post(url, data, config);
      return response.data;
    } catch (error) {
      // Handle error
      console.error("POST request error:", error);
      throw error;
    }
  },

  PUT: async (url, data = {}, config = {}) => {
    try {
      const response = await axios.put(url, data, config);
      return response.data;
    } catch (error) {
      // Handle error
      console.error("PUT request error:", error);
      throw error;
    }
  },

  PATCH: async (url, data = {}, config = {}) => {
    try {
      const response = await axios.patch(url, data, config);
      return response.data;
    } catch (error) {
      // Handle error
      console.error("PATCH request error:", error);
      throw error;
    }
  },

  DELETE: async (url, config = {}) => {
    try {
      const response = await axios.delete(url, config);
      return response.data;
    } catch (error) {
      // Handle error
      console.error("DELETE request error:", error);
      throw error;
    }
  },
};

export default http;
