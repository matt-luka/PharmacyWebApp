import { LOGIN_SUCCESS, LOGOUT_SUCCESS, USERINFO_RESET } from "../actions/constants"
import _ from 'lodash'

const initialState = {
  userInfo: null,
  token: null,
  menus: null,
}

const userReducer = (state = initialState, { type, payload }) => {
  let copy
  switch (type) {
  case LOGIN_SUCCESS:
    copy = _.cloneDeep(state)
    copy.userInfo = payload.userInfo
    copy.token = payload.token
    return copy
  case LOGOUT_SUCCESS:
  case USERINFO_RESET:
    return {
      userInfo: null,
      token: null,
      menus: null,
    }
  default:
    return state
  }
}

export default userReducer