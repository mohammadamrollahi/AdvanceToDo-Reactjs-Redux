import types from './ToDoType'
export const deletetodo=(todo)=>{
    return{
        type:types.DELETE_TO_DO,
        payload:todo
    }
}
export const addsubcategory=(subcategory)=>{
    return{
        type:types.ADD_SUB_CATEGORY,
        payload:subcategory
    }
}
export const editcategory=(item,newTitle)=>{
    return{
        type:types.EDIT_CATEGORY,
        payload:{item,newTitle},
    }
}