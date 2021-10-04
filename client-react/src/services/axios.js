import axios from "axios";
const axiosInstance = axios.create({
    baseURL: `http://localhost:${process.env.PORT || 5000}`,
    headers: {
        "Content-type": "application/json",
    },
});
export default axiosInstance;
