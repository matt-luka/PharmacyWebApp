import React, {useState, useRef} from 'react'
import {show} from '../../utils/functions'
import { userLogin } from '../../api/login/login'
import { message, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccessAction } from '../../redux/actions/user'
import accounticon from '../../images/account.png'
import passwordicon from '../../images/password.png'
import { useImperativeHandle,forwardRef } from 'react'

function Login(props,ref) {
  const errorTip = useRef()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  const [tipText, setTipText] = useState('')
  const [click, setClick] = useState(true)
  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch()
  const getAccount = event => {
    setAccount(event.target.value)
  }
  const getPassword = event => {
    setPassword(event.target.value)
  }

  // Login Request
  const loginRequest = async(name, password) => {
    setIsLogin(true)
    try {
      const data = await userLogin(name, password)
      setClick(true)
      dispatch(loginSuccessAction({username: name, token: data.token}))
      message.success('Success')
      setIsLogin(false)
    } catch (error) {
      setClick(true)
      message.warn('Error')
      setIsLogin(false)
      // 用户名密码错误提示
      setTipText('Incorrect Email or Password')
        show(errorTip,setClick)
    }
  }
  // Login Button
  const handlerLogin = () => {
    if (click) {
      setClick(false)
      // Check Empty
      if (account.trim() === '') {
        props.setTipText('Email cannot be empty')
        return false
      }

      if (password.trim() === '') {
        props.setTipText('Password cannot be empty')
        return false
      }
      console.log('Login Parameters',account.trim(), password.trim())
      loginRequest(account, password)  
    
    }
  }
  const openRegist = function(){
    props.openRegist(true)
  }
   useImperativeHandle(ref, () => ({
        setData: (params) => {
            setClick(true)
        }
    }))

  return (
      <div className='bigBox'>
        <div className='loginBox'>
          <div className='title'>Sign In</div>
          <div className='form'>
            <div className='formItem'>
              <img src={accounticon} alt="" />
              <input type="text" value={account} onChange={getAccount} placeholder='Email'/>
            </div>
            <div className='formItem' style={{marginTop:'28px'}}>
              <img src={passwordicon} alt="" />
              <input type="password" value={password} onChange={getPassword} placeholder='Password'/>
            </div>
          </div>    
          <div className='register' onClick={openRegist}>Register account</div>
          <div className='signIn'>
            <button onClick={handlerLogin}>Sign in</button>
          </div>
        </div>
      </div> 
  )
}
export default forwardRef(Login)