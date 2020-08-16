import React,{useState,useEffect} from "react";
import { Table } from 'reactstrap';
import ToDoRow from '../ToDoRow/ToDoRow';
import {connect} from 'react-redux'
function ToDoTable({ToDoList}) {

  return (

    <Table dark>
      <thead>
      <th>Number</th>
          <th>Category</th>
          <th>Progress</th>
          <th>Time</th>
          <th>Action</th>
      </thead>
      <tbody>
      {ToDoList.map(item => <ToDoRow item={item}/>

)}
      </tbody>
    </Table>
  );
}
const mapStateToProps=state=>{
    return{
        ToDoList:state.toDo.ToDoList
    }
}
export default connect(mapStateToProps,{})(ToDoTable);
