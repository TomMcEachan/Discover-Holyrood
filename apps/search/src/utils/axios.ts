import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://discover-holyrood-cms.azurewebsites.net/api",
});

export default axiosInstance;
