/* Login request */
import API from '../constants'
import request from '../../utils/request'

export const orderAdd = (data) => request({
  url: API.ORDERADD,
  method: 'POST',
  data
})

export const orderLst = (token) => request({
  url: API.ORDERLIST+"?token="+  token,
  method: 'GET'
})

export const medicationFun = (email, password) => request({
  url: API.medication,
  method: 'GET'
})

