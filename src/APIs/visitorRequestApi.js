import axiosInstance from './axiosInstance'

export const addVisitorRequest = (data) =>
    axiosInstance.post('/visitor/addVisitorRequest', data);


export const getMyVisitorRequests = (page, size, sortBy, ascending) => 
    axiosInstance.get('/visitor/viewVisitorEntryRequestByUser', {params: {page, size, sortBy, ascending}});

export const searchMyVisitorRequestsByKeyword = (page, size, sortBy, ascending, keyword) => 
    axiosInstance.get('/visitor/searchVisitorEntryRequestByUser', {params: {page, size, sortBy, ascending, keyword}});


export const getApprovedVisitorRequests = (page, size, sortBy, ascending) => 
    axiosInstance.get('/visitor/viewAcceptVisitorEntryRequest', {params: {page, size, sortBy, ascending}});

export const searchApprovedVisitorRequests = (page, size, sortBy, ascending, keyword) => 
    axiosInstance.get('/visitor/searchAcceptVisitorEntryRequest', {params: {page, size, sortBy, ascending, keyword}});


export const getPendingVisitorRequests = (page, size, sortBy, ascending) =>
    axiosInstance.get('/visitor/viewPendingVisitorEntryRequest', {params: {page, size, sortBy, ascending}});

export const searchPendingVisitorRequests = (page, size, sortBy, ascending, keyword) => 
    axiosInstance.get('/visitor/searchPendingVisitorEntryRequest', {params: {page, size, sortBy, ascending, keyword}});


export const getNotPendingVisitorRequests = (page, size, sortBy, ascending) =>
    axiosInstance.get('/visitor/viewNotPendingVisitorEntryRequest', {params: {page, size, sortBy, ascending}});

export const searchNotPendingVisitorRequests = (page, size, sortBy, ascending, keyword) => 
    axiosInstance.get('/visitor/searchNotPendingVisitorEntryRequest', {params: {page, size, sortBy, ascending, keyword}});
