import React from 'react'
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
function EditeModal({ modal, ModalToggle,id }) {
    return (
        <div>
             <Modal isOpen={modal} toggle={ModalToggle}>
        <ModalHeader toggle={ModalToggle}>Modal title</ModalHeader>
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
      
        </div>
    )
}

export default EditeModal
