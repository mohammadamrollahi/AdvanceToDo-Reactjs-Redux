import {combineReducers} from 'redux'
import ToDoReducer from './ToDo/ToDoReducer'
export default combineReducers({
    toDo:ToDoReducer,
})