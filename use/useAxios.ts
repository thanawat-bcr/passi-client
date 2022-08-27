// Reflect the token config in plugin axios.ts, but for composition API

import { default as axiosLib, AxiosRequestConfig } from 'axios';
// import { useAxios as vueUseUseAxios } from '@vueuse/integrations';

const BASE_URL = 'https://petmall_api.sopet.co/'

const instance = axiosLib.create({
  baseURL: BASE_URL,
})

instance.interceptors.request.use((config) => {
  config.headers.common['Authorization'] = `Bearer ${process.browser ? localStorage.getItem('token') : ''}`;
  config.headers.common['access-control-allow-origin'] = `*`;
  return config;
});

instance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 403 || error.response.status === 401) {
    if (process.browser) localStorage.removeItem("token");
  }
  return error.response;
});

export const axios = instance;