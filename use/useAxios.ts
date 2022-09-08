// Reflect the token config in plugin axios.ts, but for composition API

import { default as axiosLib, AxiosRequestConfig } from 'axios';
// import { useAxios as vueUseUseAxios } from '@vueuse/integrations';

// const BASE_URL = 'http://localhost:3128/'
const BASE_URL = 'http://passi.sit.kmutt.ac.th:3128/'
// const BASE_URL = 'https://api.kairos.com'

const instance = axiosLib.create({
  baseURL: BASE_URL,
})

instance.interceptors.request.use((config) => {
  // config.headers.common['app_id'] = '68b0c0ea';
  // config.headers.common['app_key'] = '3e1615c6719a7b955cb417ba8045f4e1';
  // config.headers.common['Authorization'] = `Bearer ${process.browser ? localStorage.getItem('token') : ''}`;
  // config.headers.common['access-control-allow-origin'] = `*`;
  return config;
});

instance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  throw error.response;
});

export const axios = instance;