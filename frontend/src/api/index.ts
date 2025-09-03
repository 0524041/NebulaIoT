import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // 這裡填後端 API
});

export const getDevices = async () => {
  const res = await api.get("/devices");
  return res.data;
};
