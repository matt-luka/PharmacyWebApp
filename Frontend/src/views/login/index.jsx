import React, {useState, useRef} from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Regist from './regist'
import Login from './login'
import {show} from '../../utils/functions'
export default function LoginIncex(props) {
  const errorTip = useRef()
  const refRegist = useRef()
  const refLogin = useRef()
  const [isRegist, setIsRegist] = useState(false)
  const [tipText, setTipText] = useState('')
  const openRegist = ()=>{
    setIsRegist(true)
  }
  const closeRegist = ()=>{
    setIsRegist(false)
  }
  const setTip = (text)=>{
    setTipText(text)
    show(errorTip,refRegist.current.setData)
  }
  const setTipLogin = (text)=>{
    setTipText(text)
    show(errorTip,refLogin.current.setData)
  }
  const token = useSelector(state => state.user.token)

  return token ? <Redirect to={'/'} /> : (
    <div className='loginPage'>
      {isRegist?<Regist ref={refRegist} closeRegist={closeRegist} setTipText={setTip}></Regist>:<Login ref={refLogin} setTipText={setTipLogin} openRegist={openRegist}></Login>}
       <div className='error' ref={errorTip}>{tipText}</div>
    </div>
  )
}
