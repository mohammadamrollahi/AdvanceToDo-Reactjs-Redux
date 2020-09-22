import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from "react-redux"
import {editsubcategory} from "../../redux/ToDo/ToDoAction"
import {deletesubcategory} from "../../redux/ToDo/ToDoAction"
import {manageid} from "../../redux/ToDo/ToDoAction"


const useStyles = makeStyles((theme) => ({
  SubCategory:{
    backgroundColor:"#fd7e14"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "450px",
    height: "500px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
  inputs: {
    width: "80%",
  },
  inputCantainer: {
    display: "flex",
    justifyContent: "space-around",
    height: "80%",
    alignItems: "center",
    flexDirection: "column",
  },
}));
function SubCategory({ inneritem, temp,editsubcategory,deletesubcategory ,manageid}) {
  const [open, setOpen] = React.useState(false);
  const handleSubmit=()=>{
    editsubcategory(inneritem,handleChangeTemp.title, handleChangeTemp.text,handleChangeTemp.time);
    manageid()
    handleModalClose();
  }
  const handleOpen = () => {
    setOpen(true);
  };
const [handleChangeTemp, sethandleChangeTemp] = useState({})
  const classes=useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    sethandleChangeTemp({
      ...handleChangeTemp,
      id:inneritem.id,
      [name]: value,
    });
  };
  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <>
    <TableRow className={classes.SubCategory} style={{display: temp ? "table-row" : "none" }}>
      <TableCell scope="row">
      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </TableCell>
      <TableCell>{inneritem.title}</TableCell>
      <TableCell>{inneritem.text}</TableCell>
      <TableCell>
        {inneritem.time}

      </TableCell>
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
           
            <MenuItem onClick={handleOpen}> Edit </MenuItem>
            <MenuItem onClick={()=>deletesubcategory(inneritem)} >Delete</MenuItem>
          </Menu>

      </TableCell>
    </TableRow>
    <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleModalClose}
            className={classes.modal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Grid container className={classes.paper}>
                <Grid item xs={12} className={classes.inputCantainer}>
                  <TextField
                    className={classes.inputs}
                    onChange={handleChange}
                    name="title"
                    label="title"
                    variant="filled"
                  />
                  <TextField
                    className={classes.inputs}
                    onChange={handleChange}
                    id="filled-textarea"
                    label="Descriotion"
                    name="text"
                    placeholder="write about your plan..."
                    multiline
                    variant="filled"
                  />
                  <TextField
                    id="time"
                    onChange={handleChange}
                    name="time"
                    label="Alarm clock"
                    type="time"
                    defaultValue="07:30"
                    className={classes.inputs}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                  <Button variant="outlined" color="primary" onClick={()=>handleSubmit()}>
                    Edit
                  </Button>
                </Grid>
              </Grid>
            </Fade>
          </Modal>
    </>
  );
}

export default connect(null,{editsubcategory,deletesubcategory,manageid})(SubCategory);
