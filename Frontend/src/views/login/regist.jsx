import React,{useState,useRef} from 'react'
import account from '../../images/account.png'
import passwordicon from '../../images/password.png'
import emailicon from '../../images/email.png'
import { message } from "antd";
import { useImperativeHandle,forwardRef } from 'react'
import { register } from "../../api/login/login";

 function Regist(props,ref){
   
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, getPhone] = useState('')
    const [datebirth, setDatebirth] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [click, setClick] = useState(true)
    const registing = ()=>{
        if (click) {
          setClick(false);
          if (firstName.trim() === "") {
            props.setTipText("First Name null");
            return false;
          }
          if (lastName.trim() === "") {
            props.setTipText("Last Name null");
            return false;
          }
          if (phone.trim() === "") {
            props.setTipText("phone null");
            return false;
          }
        //   if (datebirth.trim() === "") {
        //     props.setTipText("Date of birth null");
        //     return false;
        //   }
          if (email.trim() === "") {
            props.setTipText("Email null");
            return false;
          }
          if (password.trim() === "") {
            props.setTipText("password null");
            return false;
          }
          //Register Portal
          console.log(
            "Registration Information",
            firstName,
            lastName,
            phone,
            datebirth,
            email,
            password
          );
          registSet({ firstName, lastName, email, phone, password });
        }
    }
    const getFirstName = event=>{
        setFirstName(event.target.value)
    }
    const getLastName = event=>{
        setLastName(event.target.value)
    }
    const getGender = event=>{
        getPhone(event.target.value)
    }
    const getDatebirth = event=>{
        setDatebirth(event.target.value)
    }
    const getEmail = event=>{
        setEmail(event.target.value)
    }
    const getPassword = event=>{
        setPassword(event.target.value)
    }
     useImperativeHandle(ref, () => ({ 
        setData: (params) => {
            setClick(true)
        }
    }))
    
    const registSet = (params)=>{
        register(params).then((res) => {
          console.log(res);
          
          if(res.stat == '201'){
            message.success(res.msg);
            props.closeRegist();
          }else{
            message.warn(res.msg);
            setClick(true)
          }
        }).catch(msg=>{
             
        });
    }
    return <div className="registBox">
        <div className="left"></div>
        <div className="right">
            <div className='loginBox'>
                <div className='title' style={{marginBottom:'20px'}}>Register Account</div>
                <div className='form'>
                    <div className='formItem'>
                        <img src={account} alt="" />
                        <input type="text" value={firstName} onChange={getFirstName}  placeholder='First name'/>
                    </div>
                    <div className='formItem'>
                        <img src={account} alt="" />
                        <input type="text" value={lastName} onChange={getLastName}  placeholder='Last name'/>
                    </div>
                    <div className='formItem'>
                        <img src={account} alt="" />
                        <input type="text" value={phone} onChange={getGender}  placeholder='phone'/>
                    </div>
                    {/* <div className='formItem'>
                        <img src={account} alt="" />
                        <input type="text" value={datebirth} onChange={getDatebirth}  placeholder='Date of birth'/>
                    </div> */}
                    <div className='formItem' >
                        <img src={emailicon} alt="" />
                        <input type="text" value={email} onChange={getEmail} placeholder='Email'/>
                    </div>
                    <div className='formItem' >
                        <img src={passwordicon} style={{marginLeft:'29px'}} alt="" />
                        <input type="password" value={password} onChange={getPassword} placeholder='set Password'/>
                    </div>
                </div>
                <div className='signIn' style={{marginTop:'20px'}}>
                    <button onClick={registing}>Regist in</button>
                </div>
                </div>
        </div>
    </div>
}


export default forwardRef(Regist)