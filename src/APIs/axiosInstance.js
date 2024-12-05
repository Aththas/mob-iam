import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8090/vems_backend/api/v1",
    headers: {
        'Content-Type': 'application/json',
    }
});

axiosInstance.interceptors.request.use(
    (request) => {
        const accessToken = sessionStorage.getItem('accessToken');
        if(accessToken){
            request.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return request;
    },
    (error) => Promise.reject(error) 
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
    
        if(error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;

            try{
                const refreshToken = sessionStorage.getItem("refreshToken");
                const response = await axiosInstance.post("/auth/refresh", {}, {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`
                      }
                });

                const { accessToken } = response.data.data;
                sessionStorage.setItem('accessToken', accessToken);

                axiosInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

                return axiosInstance(originalRequest);
                
            }catch(refreshError){
                console.error('Error refreshing token:', refreshError);
                window.location.href = '/';
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;