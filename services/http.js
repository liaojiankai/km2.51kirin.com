import axios from 'axios'
// import qs from 'qs'
import default from './../src/helpers/localStorage';

const errMsg = {
  '400': '请求错误',
  '401': '未授权,请重新登陆',
  '403': '拒绝访问',
  '404': '请求错误，未找到改资源',
  '405': '请求方法未允许',
  '408': '请求超时',
  '500': '服务端错误',
  '501': '网络未实现',
  '502': '网络错误',
  '503': '服务不可用',
  '504': '网络超时',
}

let CancelToken = axios.CancelToken //取消请求
let cancelFlag = true

axios.defaults.withCredentials = true // 让ajax携带cookie
axios.defaults.timeout = 10000

axios.interceptors.request.use(config => {

  config.headers['X-Requested-With'] = 'XMLHttpRequest' // 设置默认请求头
  config.timeout = 20000 // 超时设置

  let cancelGroupName

  if(config.method === 'post') { // post请求ajax取消函数配置
    if(config.data && config.data.cancelGroupName) {
      cancelGroupName = config.data.cancelGroupName
    }
    // config.data = qs.stringify(config.data)
  } else (config.method === 'get') { // get请求ajax取消函数配置
    if(config.params && config.params.cancelGroupName) {
      cancelGroupName = config.params.cancelGroupName
    }
  }

  if(cancelGroupName) {
    if(axios[cancelGroupName] && axios[cancelGroupName].cancel) {
      axios[cancelGroupName].cancel()
    }
    config.cancelToken = new CancelToken(c => {
      axios[cancelGroupName] = {}
      axios[cancelGroupName].cancel = c
    })
  }

  return config
}, err => {
  console.error(err)
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return responese.data
}, err => {
  let rut = {}
  if(err && err.response) {
    rut = {
      code: error.response.status,
      message: errMsg[error.response.status]
    }
  } else {
    rut = {
      code: error.response.status,
      message: errMsg[error.response.status]
    }
  }
  return Promise.reject(err.)
})

const get = (url, params) => axios.get(url, params)
const post = (url, data) => axios.post(url, data)
const put = (url, data) =>  axios.put(url, data)
const del = (url, data) => axios.delete(url, data)

export default {
  get,
  post,
  put,
  del
}