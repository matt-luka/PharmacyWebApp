import { Button, Form, Input, Modal, message, Select } from "antd";
import React, {useState, useRef} from 'react'
const { Option } = Select;
export default function(props){
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [medication, setMedication] = useState("");
  const [dosage, setDosage] = useState("");
  const [price, setPrice] = useState("");
  const [quantity,setQuantity] = useState("")
  const confirmPayment = ()=>{
    message.info("pay success");
    props.closeModel()
  }
  const getMed = event=>{
    setMedication(event.target.value)
  }
  const getDosage = event=>{
    setDosage(event.target.value)
  }
  const getPrice = event=>{
    setPrice(event.target.value)
  }
  const getQuantity = event=>{
    setQuantity(event.target.value)
  }
  
  const handleSelect = (value) => {
    console.log(`selected ${value}`);
  };
    return (
      <div className="pay">
        <Form
          name="basic"
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Card Type">
            <Select
              defaultValue="Credit"
              style={{
                width: 120,
              }}
              onChange={handleSelect}
            >
              <Option value="Credit">Credit</Option>
              <Option value="Debit">Debit</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Card Number">
            <Input value={medication} onChange={getMed}/>
          </Form.Item>

          <Form.Item label="Name on Card">
            <Input value={dosage} onChange={getDosage}/>
          </Form.Item>

          <Form.Item label="Expiration Date">
            <Input value={price} onChange={getPrice}/>
          </Form.Item>

          <Form.Item label="CVV">
              <Input value={quantity} onChange={getQuantity}/>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" onClick={confirmPayment} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
}