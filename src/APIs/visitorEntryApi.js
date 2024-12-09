import axiosInstance from "./axiosInstance";

//Security - to mark in time
export const markInTime = (data) =>
    axiosInstance.post('/visitorEntry/recordInTime', data);

//Security - to mark out time
export const markOutTime = (data) =>
    axiosInstance.put('/visitorEntry/recordOutTime', data);