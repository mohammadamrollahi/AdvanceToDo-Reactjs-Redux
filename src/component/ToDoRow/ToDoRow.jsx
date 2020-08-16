import React, { useState } from "react";
import {
  Button,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./ToDoRow.scss";



function ToDoRow({ item }) {
  const [temp, settemp] = useState(false);
  const mytoggle = () => {
    if (temp) settemp(false);
    else settemp(true);
  };
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleDelete=(id)=>{
      
  }
  return (
    <>
      <tr>
        <th onClick={() => mytoggle()} scope="row">
          {item.id}
        </th>
        <td onClick={() => mytoggle()}>{item.category}</td>
        <td onClick={() => mytoggle()}>
          <div className="text-center">{item.progress} %</div>
          <Progress color="success" value={item.progress} />
        </td>
        <td onClick={() => mytoggle()}>{item.time}</td>
        <td>
          <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
            <DropdownToggle>
              <i class="fas fa-ellipsis-v"></i>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem >Add</DropdownItem>
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem onClick={()=>handleDelete(item.id)}>Delete</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </td>
      </tr>
      <thead
        className="whitebg"
        style={{ display: temp ? "table-row" : "none" }}
      >
        <th>status</th>
        <th>title</th>
        <th>Action</th>
        <th>Time</th>
        <th>action</th>
      </thead>
      {item.tasks.map((inneritem) => (
        <tr
          className="whitebg"
          style={{ display: temp ? "table-row" : "none" }}
        >
          <th scope="row">
            <input type="checkbox" />
          </th>
          <td>{inneritem.text}</td>
          <td></td>
          <td>
            " 00:00:00 "
            <Button outline color="primary">
              START
            </Button>
          </td>
          <td>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle>
                <i class="fas fa-ellipsis-v"></i>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </td>
        </tr>
      ))}
    </>
  );
}

export default ToDoRow;
