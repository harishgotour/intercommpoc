import axios from 'axios';

let commPort;

window.addEventListener('message', (event) => {
    if(event.data && event.data.type === 'RESET_TRACKER'){
        commPort = event.ports[0];
    }
})

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    debugger;
    commPort && commPort.postMessage("Clicked the document at: "+(new Date().toLocaleString()), "*");
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default axios;