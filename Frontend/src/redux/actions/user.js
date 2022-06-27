import { message } from "antd";
import { userLogin } from "../../api/login/login";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, USERINFO_RESET } from "./constants";

export const loginSuccessAction = ({username, token, avatarUrl = null}) => ({
  type: LOGIN_SUCCESS,
  payload: {
    userInfo: {
      username,
      avatarUrl,
    },
    token,
  }
})

export const logoutSuccessAction = () => ({
  type: LOGOUT_SUCCESS,
})

export const resetAction = () => ({
  type: USERINFO_RESET,
})

export const loginAsyncAction = (name, password) => (dispatch, getState) => {
  userLogin(name, password)
  .then(data => {
    dispatch(loginSuccessAction({username: name, token: data.token}))
    message.success('Login Success')
  })
}