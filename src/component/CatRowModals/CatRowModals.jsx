import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { addsubcategory } from "../../redux/ToDo/ToDoAction";
import { editcategory } from "../../redux/ToDo/ToDoAction";
import TextField from "@material-ui/core/TextField";
import {manageid} from "../../redux/ToDo/ToDoAction"
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
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
function CatRowModals({
  ModalOpen,
  ModalToggle,
  item,
  addsubcategory,
  modalType,
  ToDoList,
  editcategory,
  setModalOpen,
  manageid
}) {
  const [subCat, setsubCat] = useState({});
  const handlesubmit = (event) => {
    event.preventDefault();
    addsubcategory(subCat);
    manageid()
    handleClose()
  };
  const handleEditesubmit = (event) => {
    event.preventDefault();
    editcategory(item, catState.category, catState.time);
    handleClose()
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setsubCat({
      ...subCat,
      id: item.id,
      status:false,
      [name]: value,
    });
  };
  const [catState, setcatState] = useState({});
  useEffect(() => {
    setcatState({ category: item.category, time: item.time });
  }, [ToDoList]);

  const EditHandleChange = (event) => {
    const { name, value } = event.target;
    setcatState({ ...catState, [name]: value });
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      {
        modalType == "Add" && (
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={ModalOpen}
            onClose={handleClose}
            className={classes.modal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={ModalOpen}>
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
                  <Button variant="outlined" color="primary" onClick={handlesubmit}>
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Fade>
          </Modal>
        )
      }
       {modalType=="Edit" &&   (
          <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={ModalOpen}
          onClose={handleClose}
          className={classes.modal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={ModalOpen}>
            <Grid container className={classes.paper}>
              <Grid item xs={12} className={classes.inputCantainer}>
                <TextField
                  className={classes.inputs}
                  onChange={EditHandleChange} 
                  name="category"
                  label="title"
                  variant="filled"
                />
                <TextField
                  id="time"
                  onChange={EditHandleChange}
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
                <Button variant="outlined" color="primary" onClick={handleEditesubmit}>
                  Edit
                </Button>
              </Grid>
            </Grid>
          </Fade>
        </Modal>
       )

} 
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ToDoList: state.toDo.ToDoList,
  };
};
export default connect(mapStateToProps, { addsubcategory, editcategory ,manageid})(
  CatRowModals
);
