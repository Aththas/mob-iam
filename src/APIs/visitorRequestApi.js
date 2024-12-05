import axiosInstance from './axiosInstance'

export const getMyVisitorRequests = (page, size, sortBy, ascending) => 
    axiosInstance.get('/visitor/viewVisitorEntryRequestByUser', {params:  {page, size, sortBy, ascending}});

export const addVisitorRequest = (data) =>
    axiosInstance.post('/visitor/addVisitorRequest', data);