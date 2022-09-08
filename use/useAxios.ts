// Reflect the token config in plugin axios.ts, but for composition API

import { default as axiosLib, AxiosRequestConfig } from 'axios';
// import { useAxios as vueUseUseAxios } from '@vueuse/integrations';

// const BASE_URL = 'http://localhost:8080/'
// const BASE_URL = 'http://passi.sit.kmutt.ac.th:3128/'
const BASE_URL = 'https://passi-api.tutorism.me:8443/'
// const BASE_URL = 'https://api.kairos.com'

const instance = axiosLib.create({
  baseURL: BASE_URL,
})

instance.interceptors.request.use((config) => {
  // config.headers.common['Authorization'] = `Bearer ${process.browser ? localStorage.getItem('token') : ''}`;
  // config.headers.common['access-control-allow-origin'] = `*`;
  return config;
});

instance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  throw error.response.data.status;
});

export const axios = instance;
