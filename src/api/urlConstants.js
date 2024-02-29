const BASE_URL =  "http://localhost:5000"
//process.env.BASE_URL ||
export const URLConstants = {
    login: `${BASE_URL}/auth/login`,
    register: `${BASE_URL}/auth/register`,
    logout: `${BASE_URL}/logout`,
    videos: `${BASE_URL}/videos`,
};
