import axiosInstance from './axiosInstance'

//All - add visitor entry request 
export const addVisitorRequest = (data) =>
    axiosInstance.post('/visitor/addVisitorRequest', data);


//All - view page their visitor entry requests
export const getMyVisitorRequests = (page, size, sortBy, ascending) => 
    axiosInstance.get('/visitor/viewVisitorEntryRequestByUser', {params: {page, size, sortBy, ascending}});

export const searchMyVisitorRequestsByKeyword = (page, size, sortBy, ascending, keyword) => 
    axiosInstance.get('/visitor/searchVisitorEntryRequestByUser', {params: {page, size, sortBy, ascending, keyword}});


//Security - view page of security approved visitor entry requests
export const getApprovedVisitorRequests = (page, size, sortBy, ascending) => 
    axiosInstance.get('/visitor/viewAcceptVisitorEntryRequest', {params: {page, size, sortBy, ascending}});

export const searchApprovedVisitorRequests = (page, size, sortBy, ascending, keyword) => 
    axiosInstance.get('/visitor/searchAcceptVisitorEntryRequest', {params: {page, size, sortBy, ascending, keyword}});


//Security - view page of security approval for accpet/reject requests 
export const getPendingVisitorRequests = (page, size, sortBy, ascending) =>
    axiosInstance.get('/visitor/viewPendingVisitorEntryRequest', {params: {page, size, sortBy, ascending}});

export const searchPendingVisitorRequests = (page, size, sortBy, ascending, keyword) => 
    axiosInstance.get('/visitor/searchPendingVisitorEntryRequest', {params: {page, size, sortBy, ascending, keyword}});

//Security - view page of security approval for viewing the accpeted/rejected requests (request history) 
export const getNotPendingVisitorRequests = (page, size, sortBy, ascending) =>
    axiosInstance.get('/visitor/viewNotPendingVisitorEntryRequest', {params: {page, size, sortBy, ascending}});

export const searchNotPendingVisitorRequests = (page, size, sortBy, ascending, keyword) => 
    axiosInstance.get('/visitor/searchNotPendingVisitorEntryRequest', {params: {page, size, sortBy, ascending, keyword}});

//Security - to accept the requests
export const acceptVisitorEntryRequest = (id) =>
    axiosInstance.post('/visitor/acceptVisitorRequestPermission', null, {params: {id}});

//Security - to reject the requests
export const rejectVisitorEntryRequest = (id) =>
    axiosInstance.post('/visitor/rejectVisitorRequestPermission', null, {params: {id}});

//Security - get Entry details by NIC
export const getVisitorEntryDetailsByNic = (nic) =>
    axiosInstance.get('/visitor/viewVisitorEntryByNic', {params: {nic}});
