import axiosInstance from "./axiosInstance";

export const getInternDetails = (username) =>
    axiosInstance.get('/intern', {params: {username}});