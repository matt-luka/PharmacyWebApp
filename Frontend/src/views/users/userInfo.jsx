import { Button, Checkbox, Form, Input } from "antd";
import React, { useState, useRef, useEffect } from "react";
import { userList } from "../../api/login/login";
import { useSelector, useDispatch } from "react-redux";
export default function (props) {
  useEffect(()=>{
    getUserList()
  },[])
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [username,setUsername] = useState('Zhang')
  const [lastName,setLastName] = useState('San')
  const [gender,setGender] = useState('man')
  const [datebirth, setDatebirth] = useState('2000-02-02')
  
  const [phoneNumber,setPhoneNumber] = useState('13888888888')
  const [email,setEmail] = useState('138888888@163.com')
  const { userInfo, token } = useSelector((state) => state.user);
  const getUserList = ()=>{
    console.log('userInfo',userInfo);
    userList({ email: userInfo.username }).then((res) => {
      setUsername(res.firstName);
      setLastName(res.lastName);
      setPhoneNumber(res.phone);
      setEmail(res.email);
    });
  }

  return (
    <div className="user">
      <Form
        className="userForm"
        name="basic"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
        >
          <Input value={username} />
        </Form.Item>

        <Form.Item
          label="Last Name"
        >
          <Input value={lastName}/>
        </Form.Item>
        {/* <Form.Item
          label="Gender"
        >
          <Input value={gender}/>
        </Form.Item> */}

        {/* <Form.Item
          label="Date of birth"
        >
          <Input value={datebirth}/>
        </Form.Item> */}
         <Form.Item
          label="Phone Number"
        >
          <Input value={phoneNumber}/>
        </Form.Item>

         <Form.Item
          label="Email"
        >
          <Input value={email}/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
        </Form.Item>
      </Form>
    </div>
  );
}
