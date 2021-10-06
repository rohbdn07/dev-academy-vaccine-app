import axios from "axios";
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_LOCAL_HOST,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
});
export default axiosInstance;
