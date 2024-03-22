const BASE_URL =  "http://localhost:5000"

//process.env.BASE_URL ||
export const URLConstants = {
    login: `${BASE_URL}/auth/login`,
    register: `${BASE_URL}/auth/register`,
    videos: `${BASE_URL}/videos`,
    saveYoutubeDetails: `${BASE_URL}/saveyoutubedetails`,
    uploadTocloud: `${BASE_URL}/uploadtocloud`,
};

const clientId = "267936848773-tml5tfm219hn7uig6t4e1qjrg9b6ar2n.apps.googleusercontent.com"
const redirectUrl = "http://localhost:5173/dashboard"
export const YOUTUBE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=https://www.googleapis.com/auth/youtube` 