import axios from 'axios';
import { URLConstants } from './urlConstants';

export const login = async (credentials) => {
  try {
    console.log(credentials)
    const response = await axios.post(URLConstants.login, credentials);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (credentials) => {
  try {
    console.log(credentials)
    const response = await axios.post(URLConstants.register, credentials);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
