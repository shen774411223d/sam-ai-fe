import axios from 'axios';
const REGX = /\/api/g;

const isDev = process.env.NODE_ENV === 'development';
const instance = axios.create({
  baseURL: !isDev
    ? 'https://sam-ai-fe-3gkemo9bf0f2a730-1317887340.ap-shanghai.app.tcloudbase.com/'
    : '',
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    if (!isDev && config.url) {
      config.url = config.url.replace(REGX, '');
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

export default instance;
