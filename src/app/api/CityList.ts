import axios from "axios";

const API_URL = "https://opendata.resas-portal.go.jp/api/v1/";

export const getPrefectures = async () => {
  try {
    const response = await axios.get(`${API_URL}prefectures`, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "daTsiG5MGvmkRaRsyQWCODottKZRJlprQjNMMCJY",
      },
    });

    return response.data.result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
