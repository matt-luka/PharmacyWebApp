/*axios */
import axios from "axios"
import { resetAction } from "../redux/actions/user"
import { store } from "../redux/store"

// const baseURL = process.env.NODE_ENV === 'development' ? 'https://open-im-test.rentsoft.cn' : 'https://open-im-online.rentsoft.cn'
const baseURL = process.env.NODE_ENV === 'development' ? 'http://10.64.12.248:8080/' : 'http://10.64.12.248:8080/'

// create axios 
const service = axios.create({
  baseURL,
  // timeout: 15000, // 15秒
})

// request interceptors
service.interceptors.request.use(config => {
  config.headers['token'] = store.getState().user.token
  return config
})

// response interceptors
service.interceptors.response.use(response => {
  if (response.status >= 200 && response.status < 300) {
    // console.log(response)
    const {errCode, errMsg, data} = response.data
    if (errCode === 0) {
      return data
    }

    // token error
    if (errCode === 700) {
      store.dispatch(resetAction())
      return
    }


    // port error
    const err = new Error('Request interface data error...')
    err.error = response.data
    return Promise.reject(err)
  }
})

export default service
