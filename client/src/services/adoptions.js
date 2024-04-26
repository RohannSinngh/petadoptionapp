import axiosInstance from "./axiosInstance";

export const createAdoption = (payload) => {
  return axiosInstance.post("/adoption/create", payload);
};

export const getAllAdoption = () => {
  return axiosInstance.get("/adoption/all");
};

export const approveAdoption = (id, status) => {
  return axiosInstance.put(`/adoption/approove/${id}`, { status });
};
