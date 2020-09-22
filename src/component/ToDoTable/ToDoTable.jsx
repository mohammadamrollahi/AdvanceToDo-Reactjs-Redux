import React,{useState,useEffect} from "react";

import ToDoRow from '../ToDoRow/ToDoRow';
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import darkTheme from '../../Themes/MyTheme'
import {manageid} from '../../redux/ToDo/ToDoAction'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function ToDoTable({ToDoList,manageid}) {
  

  return (
    <ThemeProvider theme={darkTheme}>
   
<TableContainer component={Paper}>
    <Table   aria-label="simple table">
      <TableHead>
        <TableRow>
      <TableCell >Number</TableCell>
          <TableCell >Category
          
          </TableCell>
          <TableCell color="primary">Progress
          </TableCell>
          
          <TableCell>Time</TableCell>
          <TableCell>Action</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
        
      {ToDoList.map(item => <ToDoRow item={item}/>

)}
      </TableBody>

    </Table>
    </TableContainer>
   </ThemeProvider>
  );
}
const mapStateToProps=state=>{
    return{
        ToDoList:state.toDo.ToDoList
    }
}
export default connect(mapStateToProps,{manageid})(ToDoTable);
