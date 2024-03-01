import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../Store/Admin/adminAction";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
];

const Customers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
const customerstate = useSelector((state) => state.admin.customers);
  const data1 = [];
  for (let i = 0; i < customerstate.length; i++) {
    if (customerstate[i].role !== "admin") {
      data1.push({
        key: i ,
        name: customerstate[i].name ,
        email: customerstate[i].email,
        mobile: customerstate[i].phone,
      });
    }
  }
console.log(data1)
  
// const data1 = [{
//     key: '1',
//     name: 'dhinesh',
//     email: 'dhineshpandi714@gmail.com',
//     mobile: '7904319253'
// }]
  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;
