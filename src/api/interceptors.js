import axios from "axios";
import { Message } from "element-ui";

// 创建axios实例
const http = axios.create({
  baseURL: "",
  timeout: 5000 // 请求超时时间
});

// 添加request拦截器
http.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 添加respone拦截器
http.interceptors.response.use(
  response => {
    if (response.status && response.status == 200) {
      return response.data;
    }
  },
  error => {
    switch(error.response.status){
      case 504:
        console.error(`请求失败，接口${error.response.status}，请求超时。`);
        break;
      default:
        console.error("请求失败!");
        break;
    }
    return Promise.reject(error.response);
  }
);

function handleErrorMessage(msg) {
  if (typeof(msg) === 'string') {
    return msg;
  } else if (typeof(msg) === 'object') {
    const {message} = msg;
    return message;
  } else {
    return msg;
  }
}

let RestService = {
  get(url, data) {
    return http({
      url: url,
      method: "get",
      timeout: 180000, // 单独配置超时时间
      params: data
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.error("Error: " + handleErrorMessage(error.data.msg));
    });
  },
  post(url, data) {
    return http({
      url: url,
      method: "post",
      data: data
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.error("Error: " + handleErrorMessage(error.data.msg));
    });
  }
};

export default RestService;
