/* Login request */
import API from '../constants'
import request from '../../utils/request'

export const userLogin = (email, password) => request({
  url: API.LOGIN_LOGIN,
  method: 'POST',
  data: { 
    email: email,
    password: password,
  }
})

export const register = (data) => request({
  url: API.REGISTER,
  method: 'POST',
  data
})

export const userList = (data) => request({
  url: API.USERLIST,
  method: 'POST',
  data
})

