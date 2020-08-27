import React, { useState ,useEffect} from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import {addsubcategory} from '../../redux/ToDo/ToDoAction'
import {editcategory} from "../../redux/ToDo/ToDoAction"
import {connect} from 'react-redux'
function CatRowModals({ modal, ModalToggle,item ,addsubcategory,modalType,ToDoList,editcategory}) {
  const [subCat, setsubCat] = useState({})
  const handlesubmit=(event)=>
  {
    event.preventDefault()
    addsubcategory(subCat)
    console.log(subCat.time)
    ModalToggle()
  }
  const handleEditesubmit=(event)=>{
    event.preventDefault()
    editcategory(item,catState.category)
    ModalToggle()
  }
  const handleChange=(event)=>{
    const {name,value}=event.target
    setsubCat({...subCat,
        id:item.id,
        [name]:value,
    })
    
  }
  const [catState, setcatState] = useState({})
  useEffect(() => {
    setcatState({category:item.category,time:item.time})

  }, [ToDoList])

  const EditHandleChange=(event)=>{
    const {name,value}=event.target
    setcatState({...catState,[name]:value})
  
  }
  return (
    <div>
      {modalType=="Add" &&      <Modal isOpen={modal} toggle={ModalToggle}>
        <ModalHeader toggle={ModalToggle}>Add </ModalHeader>
        <Form>
        <ModalBody>
          
            <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label for="exampleEmail">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    id="exampletitle"
                    placeholder="Add a Title"
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input type="textarea" name="text" id="exampleText" onChange={handleChange} />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">Time</Label>
                  <Input type="time" name="time" id="exampleCity" onChange={handleChange}/>
                </FormGroup>
              </Col>
            </Row>
          
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" onClick={(e)=>handlesubmit(e)}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={ModalToggle}>
            Cancel
          </Button>
          
        </ModalFooter>
        </Form>{" "}
      </Modal>
}
{modalType=="Edit" &&      <Modal isOpen={modal} toggle={ModalToggle}>
        <ModalHeader toggle={ModalToggle}>Modal title</ModalHeader>
        <Form>
        <ModalBody>
          
            <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label for="exampleEmail">Title</Label>
                  <Input
                    type="text"
                    name="category"
                    id="exampletitle"
                    placeholder="edit"
                    value={catState.category}
                    onChange={EditHandleChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">Time</Label>
                  <Input type="time" name="time" id="exampleCity" value={catState.time}
                   onChange={EditHandleChange}/>
                </FormGroup>
              </Col>
            </Row>
          
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" onClick={(e)=>handleEditesubmit(e)}>
            Edit
          </Button>{" "}
          <Button color="secondary" onClick={ModalToggle}>
            Cancel
          </Button>
          
        </ModalFooter>
        </Form>{" "}
      </Modal>
}
    </div>
  );
}
const mapStateToProps=state=>{
  return{
      ToDoList:state.toDo.ToDoList
  }
}
export default connect(mapStateToProps,{addsubcategory,editcategory})(CatRowModals)
