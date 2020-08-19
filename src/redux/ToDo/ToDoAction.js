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
