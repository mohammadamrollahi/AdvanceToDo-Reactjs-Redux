import types from './ToDoType'
const deletetodo=(todo)=>{
    return{
        type:types.DELETE_TO_DO,
        payload:todo
    }
}