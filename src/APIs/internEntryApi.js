import axiosInstance from "./axiosInstance";

//Security - to mark in time
export const internMarkInTime = (data) =>
    axiosInstance.post('/internEntry/recordInTime', data);

//Security - to mark out time
export const internMarkOutTime = (data) =>
    axiosInstance.put('/internEntry/recordOutTime', data);


//Security - view all entries
export const getAllInternEntries = (page, size, sortBy, ascending, fromDate, toDate) =>
    axiosInstance.get('/internEntry/viewInternEntries', {params: {page, size, sortBy, ascending, fromDate, toDate}});

//Security - search all entries
export const searchAllInternEntries = (page, size, sortBy, ascending, fromDate, toDate, keyword) =>
    axiosInstance.get('/internEntry/searchInternEntries', {params: {page, size, sortBy, ascending, fromDate, toDate, keyword}});