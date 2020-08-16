import types from "../ToDo/ToDoType"
const initialState={ToDoList:[
    {
        category:'programming',
        id:1,
        progress:"20",
        time:"2:10:14",
        tasks:[{
        status:true,
        text:'do my work',
        id:1
        }]
    },
    {
        category:'exercise',
        id:2,
        progress:"10",
        time:"2:10:14",
        tasks:[{
        status:true,
        text:'do my work',
        id:1
        }]
    },
    {
        category:'exercise',
        id:3,
        progress:"40",
        time:"2:10:14",
        tasks:[{
        status:true,
        text:'do my work',
        id:1
        }]
    },
    {
        category:'exercise',
        id:4,
        progress:"60",
        time:"2:10:14",
        tasks:[{
        status:true,
        text:'do my work',
        id:1
        }]
    },
    {
        category:'exercise',
        id:5,
        progress:"70",
        time:"2:10:14",
        tasks:[{
        status:true,
        text:'do my work',
        id:1
        }]
    },
    {
        category:'exercise',
        id:6,
        progress:"50",
        time:"2:10:14",
        tasks:[{
        status:true,
        text:'do my work',
        id:1
        }]
    },
    {
        category:'exercise',
        id:7,
        progress:"50",
        time:"2:10:14",
        tasks:[{
        status:true,
        text:'do my work',
        id:1
        }]
    },
    {
        category:'exercise',
        id:8,
        progress:"10",
        time:"2:10:14",
        tasks:[{
        status:true,
        text:'do my work',
        id:1
        }]
    },
    {
        category:'exercise',
        id:9,
        progress:"100",
        time:"2:10:14",
        tasks:[{
        status:true,
        text:'do my work',
        id:1
        }]
    },
    {
        category:'exercise',
        id:10,
        progress:"0",
        time:"2:10:14",
        tasks:[{
        status:true,
        text:'do my work',
        id:1
        }]
    },
    {
        category:'family',
        id:11,
        progress:"80",
        time:"2:10:14",
        tasks:
        [
            {
        status:true,
        text:'do my work',
        id:1
            },
            {status:true,
            text:'do new work ',
            id:1
             },
        ]
    }
]}
const ToDoReducer =(state=initialState,action)=>{
    switch (action.type) {   
        case types.DELETE_TO_DO:
            {
                return{
                    ...state,
                    ToDoList:[...state.ToDoList,action.payload]
                }
            }
        default:
            return state;
    }
}
export default ToDoReducer