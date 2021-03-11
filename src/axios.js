import axios from 'axios'
// 添加请求拦截器
axios.defaults.baseURL = 'http://open.duyiedu.com'
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //   console.log(config)
  config.params = {
    ...config.params,
    appkey: '13145106276_1596717456086'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default axios
