import types from "../ToDo/ToDoType";
const initialState = {
  ToDoList: [
    {
      category: "a",
      id: 1,
      rate:0.5,
      time: "02:10",
      tasks: [

      ],
    },
    {
      category: "b",
      id: 2,
      rate: 1,
      time: "02:25:05",
      tasks: [
        {
          status: true,
          title: "do my work",
          text: "lurem ipusm ipsum ipsum ipsum ipsum",
          id:"10",
          time:"02:25:05",
        },
      ],
    },
    {
      category: "c",
      id: 3,
      rate: 1.5,
      time: "02:25:05",
      tasks: [
        {
          status: true,
          title: "do my work",
          text: "lurem ipusm ipsum ipsum ipsum ipsum",
          id: 1,
          time:"10:10",
        },
      ],
    },
    {
      category: "d",
      id: 4,
      rate: 2,
      time: "02:25:05",
      tasks: [
        {
          status: true,
          title: "do my work",
          text: "lurem ipusm ipsum ipsum ipsum ipsum",
          id: 1,
          time:"10:10",
        },
      ],
    },
    {
      category: "e",
      id: 5,
      rate: 2.5,
      time: "02:25:05",
      tasks: [
        {
          status: true,
          title: "do my work",
          text: "lurem ipusm ipsum ipsum ipsum ipsum",
          id: 1,
          time:"10:10",
        },
      ],
    },
    {
      category: "f",
      id: 6,
      rate: 2.5,
      time: "02:25:05",
      tasks: [
        {
          status: true,
          title: "do my work",
          text: "lurem ipusm ipsum ipsum ipsum ipsum",
          id: 1,
          time:"10:10",
        },
      ],
    },
    {
      category: "g",
      id: 7,
      rate: 3,
      time: "02:25:05",
      tasks: [
        {
          status: true,
          title: "do my work",
          text: "lurem ipusm ipsum ipsum ipsum ipsum",
          id: 1,
          time:"10:10",
        },
      ],
    },
    {
      category: "h",
      id: 8,
      rate: 0.5,
      time: "02:25:05",
      tasks: [
        {
          status: true,
          title: "do my work",
          text: "lurem ipusm ipsum ipsum ipsum ipsum",
          id: 1,
          time:"10:10",
        },
      ],
    },
    {
      category: "i",
      id: 9,
      rate: 1.5,
      time: "02:25:05",
      tasks: [
        {
          status: true,
          title: "do my work",
          text: "lurem ipusm ipsum ipsum ipsum ipsum",
          id: 1,
          time:"10:10",
        },
      ],
    }

  ],
};
const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MANAGE_ID:{
      return{
        ...state,
        ToDoList:[
          ...state.ToDoList.map((item,index)=>{

            item.id=index+1
            item.tasks.map((taskitem,taskindex)=>{
              taskitem.id= +(item.id +`${taskindex+1}`)
            })
            return item
          })
        ]
      }
    }
    case types.DELETE_TO_DO: {
      return {
        ...state,
        ToDoList: [
          ...state.ToDoList.filter((item) => action.payload.id != item.id),
        ],
      };
    }
    case types.ADD_SUB_CATEGORY:{
        return {
            ...state,
            ToDoList:[
                ...state.ToDoList.map(item=>{
                    if(
                        item.id==action.payload.id
                    ){
                        item.tasks=[...item.tasks,action.payload]
                        return item
                    }
                    else
                    return item
                })
            ]
        }
    }
    case types.EDIT_CATEGORY:{
      return{
        ...state,
        ToDoList:[
          ...state.ToDoList.map(item=>{
            if(item.id==action.payload.item.id)
            {
              item.category=action.payload.newTitle
              item.time=action.payload.newTime
              return item
            }
            else
            return item
          })
        ]
      }
    }
      case types.DELETE_SUBCAT:{
        return{
          ...state,
          ToDoList:
            state.ToDoList.map(item=>{
              if(item.id==Math.floor((action.payload.item.id)/10))
              {
                const tasks=item.tasks.filter((taskItem,taskItemIndex)=>taskItem.id != +(`${Math.floor((action.payload.item.id)/10)}${taskItemIndex+1}`))
                return {...item,tasks}
              }
              else return item
            })
          
        }
      }
      case types.EDIT_SUBCAT:{
        return{
          ...state,
          ToDoList:[
            ...state.ToDoList.map(item=>{
              if(item.id==Math.floor((action.payload.item.id)/10))
              {
                item.tasks.map((taskItem,taskItemIndex)=>{
                  if(taskItem.id== +(`${Math.floor((action.payload.item.id)/10)}${taskItemIndex+1}`)){
                    taskItem.title=action.payload.newTitle;
                    taskItem.time=action.payload.newTime; 
                    taskItem.text=action.payload.newText; 
                    
                    return item
                  }
                  else return item
                })
                return item
              }
              else return item
            })
          ]
        }
      }
      case types.UPDATE_RATE:{
        return{
          ...state,
          ToDoList:[
            ...state.ToDoList.map(inneritem=>{
              if(inneritem.id==action.payload.item.id)
              {
                inneritem.rate=action.payload.newValue
                
                return inneritem
              }
              else
              return inneritem
            })
          ]
        }
      }
    default:
      return state;
  }
};
export default ToDoReducer;
