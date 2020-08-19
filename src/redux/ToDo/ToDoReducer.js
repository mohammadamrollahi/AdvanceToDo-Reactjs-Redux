import types from "../ToDo/ToDoType";
const initialState = {
  ToDoList: [
    {
      category: "programming",
      id: 1,
      progress: "20",
      time: "2:10:14",
      tasks: [

      ],
    },
    {
      category: "exercise",
      id: 2,
      progress: "10",
      time: "2:10:14",
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
      category: "exercise",
      id: 3,
      progress: "40",
      time: "2:10:14",
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
      category: "exercise",
      id: 4,
      progress: "60",
      time: "2:10:14",
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
      category: "exercise",
      id: 5,
      progress: "70",
      time: "2:10:14",
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
      category: "exercise",
      id: 6,
      progress: "50",
      time: "2:10:14",
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
      category: "exercise",
      id: 7,
      progress: "50",
      time: "2:10:14",
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
      category: "exercise",
      id: 8,
      progress: "10",
      time: "2:10:14",
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
      category: "exercise",
      id: 9,
      progress: "100",
      time: "2:10:14",
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
      category: "exercise",
      id: 10,
      progress: "0",
      time: "2:10:14",
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
      category: "family",
      id: 11,
      progress: "80",
      time: "2:10:14",
      tasks: [
        {
          status: true,
          title: "do my work",
          text: "lurem ipusm ipsum ipsum ipsum ipsum",
          id: 1,
          time:"10:10",
        },
        {
          status: true,
          title: "do new work ",
          text: "lurem ipusm ipsum ipsum ipsum ipsum",
          id: 1,
          time:"10:10",
        },
      ],
    },
  ],
};
const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
export default ToDoReducer;
