import React, { useState,useEffect } from "react";
import {
  Button,
} from "reactstrap";
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import "./ToDoRow.scss";
import { connect } from 'react-redux'
import { deletetodo } from '../../redux/ToDo/ToDoAction'
import CatRowModals from "../CatRowModals/CatRowModals"
import SubCategory from "../SubCategory/SubCategory"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {manageid} from "../../redux/ToDo/ToDoAction"
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import {updateRate} from "../../redux/ToDo/ToDoAction";

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
  
})(Rating);
const useStyles=makeStyles(
  {
    subCatHead:{
      backgroundColor:"#ff9844",
    },
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
  }
)
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
function ToDoRow({ item, deletetodo ,manageid,updateRate}) {
  useEffect(() => {
manageid()
  }, [])
  const classes=useStyles()
  const [temp, settemp] = useState(false);
  const subCatShowToggle = () => {
    if (temp) settemp(false);
    else settemp(true);
  };
  const [modalType, setmodalType] = useState('')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [ModalOpen, setModalOpen] = useState(false);
  const ModalToggle = () => setModalOpen(true);
  const ShowSubCatModal = () => {
    setmodalType("Add");
    ModalToggle()
    handleClose()
  }
  const EditCatModal = () => {
    setmodalType("Edit");
    ModalToggle()
    handleClose()
  }
  const handleDelete = (item) => {
    deletetodo(item)
    manageid()
    
  }

  const [hover, setHover] = useState(-1);

  return (
    <>
      <TableRow>
        <TableCell onClick={() => subCatShowToggle()} scope="row">
          {item.id}
        </TableCell>
        <TableCell onClick={() => subCatShowToggle()}>{item.category}</TableCell>
        <TableCell onClick={() => subCatShowToggle()} >
       
      <Rating
        name={item.id}
        value={item.rate}
        precision={0.5}
        onChange={(event, newValue) => {
          console.log(event)
          console.log(newValue)
          console.log(item.id)
          updateRate(item,newValue)
        }}
        // onChangeActive={(event, newHover) => {
        //   setHover(newHover);
        
        // }}
      />
      {item.rate !== null && <Box ml={2}>{labels[hover !== -1 ? hover : item.rate]}</Box>}
    
        </TableCell>
        <TableCell onClick={() => subCatShowToggle()}>{item.time}</TableCell>
        <TableCell>

          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <i class="fas fa-ellipsis-v"></i>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => ShowSubCatModal()}>Add SubCat</MenuItem>
            <MenuItem onClick={() => EditCatModal()}>Edit</MenuItem>
            <MenuItem onClick={() => handleDelete(item)}>Delete</MenuItem>
          </Menu>
        </TableCell>
      </TableRow>

      <TableRow
        className={classes.subCatHead}
        style={{ display: temp ? "table-row" : "none" }}
      >

        <TableCell>status</TableCell>
        <TableCell>title</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Time</TableCell>
        <TableCell>action</TableCell>
      </TableRow>


      {item.tasks.map((inneritem) => (
        <SubCategory inneritem={inneritem} temp={temp} />
      ))}
      <CatRowModals setModalOpen={setModalOpen} ModalOpen={ModalOpen} ModalToggle={ModalToggle} item={item} modalType={modalType} />
    </>
  );
}


export default connect(null, { deletetodo,manageid,updateRate})(ToDoRow);