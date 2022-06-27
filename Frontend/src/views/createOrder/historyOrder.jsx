import { Radio, Space, Table, Tag } from 'antd';
import React, { useState, useRef, useEffect } from "react";
import { orderLst } from "../../api/order/order";
import { useSelector, useDispatch } from "react-redux";

export default function(props){
    const [orderData,setOrderData] = useState()
    const { userInfo, token } = useSelector((state) => state.user);
    useEffect(()=>{
        orderLst(token).then((res) => {
          console.log("order data", res);
        let temp = filterData(res);
        console.log(temp)
          setOrderData(temp);
        });
    },[])
    const filterData = (data)=>{
        const temp = data.map(item=>{
            return item.items[0];
        })
        return temp;
    }
   
    const columns = [
      {
        title: "order number",
        dataIndex: "id",
        // key: 'id',
        render: (text) => <a>{text}</a>,
      },
      {
        title: "Medication",
        dataIndex: "Medicationx",
        key: "Medication",
        render: (text, record, index) => {
          return record.medication.name;
        },
      },
      {
        title: "Dosage",
        dataIndex: "Dosage",
        key: "Dosage",
        render: (text, record, index) => {
          return record.medication.dosage;
        },
      },
      {
        title: "Price",
        dataIndex: "price",
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
      },
      {
        title: "Date",
        dataIndex: "date",
        render: (text) => text?.split("+")[0].replace(/-/g, "/"),
      },
    ];


     const [top, setTop] = useState('topLeft');
  const [bottom, setBottom] = useState('bottomRight');
    
    return (
      <div className="historyOrder">
        <Table
          className="historyTable"
          columns={columns}
          pagination={{
            position: [bottom],
          }}
          dataSource={orderData}
          rowKey={record=>record.id}
        />
      </div>
    );
}