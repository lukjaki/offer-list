import axios from 'axios';

const axiosInstance = axios.create({});

// tutaj mozna przechwytywac bledy z requestow (np wylogowac uzytkownika gdy wygasl token i dostanie 401)
axiosInstance.interceptors.response.use(
    (response) => response, 
    (error) => {
        console.log(error)
    });

export default axiosInstance;
