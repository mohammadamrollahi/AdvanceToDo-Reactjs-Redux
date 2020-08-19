import React,{useState} from 'react'
import {
    Button,
    Progress,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";
function SubCategory({inneritem,temp}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
<tr
          className="whitebg"
          style={{ display: temp ? "table-row" : "none" }}
        >
          <th scope="row">
            <input type="checkbox" />
          </th>
          <td>{inneritem.title}</td>
          <td>
            
            {inneritem.text}</td>
          <td>
            {inneritem.time}
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
    )
}

export default SubCategory
