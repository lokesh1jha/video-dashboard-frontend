import axios from 'axios';
import { URLConstants } from './urlConstants';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export const login = async (credentials) => {
  try {
    var response = await axios.post(URLConstants.login, credentials);
    let message = response.data.status == 200 ? "Login successfully" : "Please check your credentials again"
    return {status: response.data.status, token : response.data.token, message, is_youtube_authenticated: response.data.is_youtube_authenticated};
  } catch (error) {
    console.log(error)
    return {status: 500, message: "Internal Server error"};
  }
};

export const register = async (credentials) => {
  try {
    console.log(credentials)
    const response = await axios.post(URLConstants.register, credentials);
    console.log(response.data);
    return {status: response.data.status, message: response.data.message};
  } catch (error) {
    return {status: 500, message: "Internal Server error"};
  }
};


export const logout = async () => {
  const navigate = useNavigate();
  try {
    console.log("-----------------")
    localStorage.removeItem('Authorization');
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
};

export const getDecodedJWT = async (token) => {
  try {
    return jwtDecode(token)
  } catch (error) {
    
  }
}