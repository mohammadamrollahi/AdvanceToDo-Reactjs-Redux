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
import {connect} from 'react-redux'
import {deletetodo} from '../../redux/ToDo/ToDoAction'
import AddSubCategoryModal from "../AddSubCategoryModal/AddSubCategoryModal"
import SubCategory from "../SubCategory/SubCategory"
function ToDoRow({ item ,deletetodo}) {
  const [temp, settemp] = useState(false);
  const subCatShowToggle = () => {
    if (temp) settemp(false);
    else settemp(true);
  };
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

  const [modal, setModal] = useState(false);
  const ModalToggle = () => setModal(!modal);
  const ShowSubCatModal=()=>{
    ModalToggle()
  }
  const handleDelete=(item)=>{
    deletetodo(item)

  }
  return (
    <>
      <tr>
        <th onClick={() => subCatShowToggle()} scope="row">
          {item.id}
        </th>
        <td onClick={() => subCatShowToggle()}>{item.category}</td>
        <td onClick={() => subCatShowToggle()}>
          <div className="text-center">{item.progress} %</div>
          <Progress color="success" value={item.progress} />
        </td>
        <td onClick={() => subCatShowToggle()}>{item.time}</td>
        <td>
          <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
            <DropdownToggle>
              <i class="fas fa-ellipsis-v"></i>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={()=>ShowSubCatModal()} >Add</DropdownItem>
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem onClick={()=>handleDelete(item)}>Delete</DropdownItem>
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
        <th>Description</th>
        <th>Time</th>
        <th>action</th>
      </thead>
      {item.tasks.map((inneritem) => (
        <SubCategory inneritem={inneritem} temp={temp}/>
      ))}
      <AddSubCategoryModal modal={modal} ModalToggle={ModalToggle} id={item.id} />
    </>
  );
}


export default connect(null,{deletetodo})(ToDoRow);