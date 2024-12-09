import axiosInstance from "./axiosInstance";

//Security - to mark in time
export const markInTime = (data) =>
    axiosInstance.post('/visitorEntry/recordInTime', data);

//Security - to mark out time
export const markOutTime = (data) =>
    axiosInstance.put('/visitorEntry/recordOutTime', data);


//Security - view all entries
export const getAllVisitorEntries = (page, size, sortBy, ascending, fromDate, toDate) =>
    axiosInstance.get('/visitorEntry/viewVisitorEntries', {params: {page, size, sortBy, ascending, fromDate, toDate}});

//Security - search all entries
export const searchAllVisitorEntries = (page, size, sortBy, ascending, fromDate, toDate, keyword) =>
    axiosInstance.get('/visitorEntry/searchVisitorEntries', {params: {page, size, sortBy, ascending, fromDate, toDate, keyword}});