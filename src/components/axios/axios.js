import axios from "axios";

const axiosInstance = () => {
  return axios.create({
    baseURL: "https://api.edamam.com/api/recipes/v2",
    params: {
      app_key: "778dd5a33dc1a776cebe010d4c311ea9",
      app_id: "dbc02619",
      type: "public",
    },
  });
};
export default axiosInstance;
