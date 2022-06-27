import { Button, Form, Input, message, Modal, Select } from "antd";
import Pay from "../../components/pay";
import React, { useState, useRef, useEffect } from "react";
import { medicationFun, orderAdd } from "../../api/order/order";
import { useSelector, useDispatch } from "react-redux";
const { Option } = Select;
export default function (props) {
   const [medicationList, setMedicationList] = useState([]);
   const [medication, setMedication] = useState("");
   const [dosage, setDosage] = useState("");
   const [price, setPrice] = useState("");
   const [quantity,setQuantity] = useState("")
  const [isModalVisible, setIsModalVisible] = useState(false);
    const { userInfo, token } = useSelector((state) => state.user);
  useEffect(()=>{
    getMedication()
  },[])
  const getMedication = ()=>{
    medicationFun().then((res) => {
      console.log("Medication", res);
      setMedicationList(res)
    });
  }
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
     CreateOrderAdd();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const onFinish = (values) => {
    console.log("Success:", values);  
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
 

  const handleChange = (value) => {
    console.log(`selected `);
    setMedication(value)
    const temp = getSelectItem(value)
    setDosage(temp.dosage);
    setPrice(temp.price);
  };

  const CreateOrderAdd = ()=>{
    let param = {
      token: token,
      price: price,
      quantity: quantity,
      medication_id: medication,
    };
    console.log('deingdancanshu',param)
    orderAdd(param).then((res) => {
      message.success("create success");
    });
  };

  const getQuantity = event=>{
    setQuantity(event.target.value)
  }


  const getSelectItem = (mid)=>{
    let result = {}
    medicationList.forEach(item=>{
      if(item.id === mid){
        result =  item
      }
    })
    return result
  }


  return (
    <div className="createOrder">
      <Form
        className="orderForm"
        name="basic"
        labelCol={{
          span: 7,
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
        <Form.Item label="Request medication">
          <Select
            defaultValue=""
            style={{
              width: 120,
            }}
            onChange={handleChange}
          >
            {medicationList.map((item, index) => (
              <Option key={index} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Dosage">
          <Input value={dosage} />
        </Form.Item>

        <Form.Item label="Price">
          <Input value={price} />
        </Form.Item>
        <Form.Item label="Quantity">
          <Input value={quantity} onChange={getQuantity} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" onClick={showModal} htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Modal
        title="pay"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <Pay closeModel={handleOk}></Pay>
      </Modal>
    </div>
  );
}
