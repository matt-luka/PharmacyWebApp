/*axios*/
import axios from "axios"
import { resetAction } from "../redux/actions/user"
import { store } from "../redux/store"
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : 'http://10.64.12.248:8080/'//本地
//const baseURL = process.env.NODE_ENV === 'development' ? 'http://36.110.20.92:8000/api/' : 'http://36.110.20.92:8000/api/'      //线上

// Create axios 
const service = axios.create({
  baseURL,
  timeout: 20000, // 20秒
})

// request interceptors
service.interceptors.request.use(config => {
  config.headers['token'] = store.getState().user.token
  return config
})

// response interceptors
service.interceptors.response.use(response => {
  if(response.status == 200){
    return response.data
  }else{
    return Promise.reject(response)
  }

})

export default service
