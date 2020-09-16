import types from './ToDoType'
export const deletetodo = (todo) => {
    return {
        type: types.DELETE_TO_DO,
        payload: todo
    }
}
export const addsubcategory = (subcategory) => {
    return {
        type: types.ADD_SUB_CATEGORY,
        payload: subcategory
    }
}
export const editcategory = (item, newTitle, newTime) => {
    return {
        type: types.EDIT_CATEGORY,
        payload: { item, newTitle, newTime },
    }
}
export const updateRate = (item, newValue) => {
    return {
        type: types.UPDATE_RATE,
        payload: { item,newValue },
    }
}
export const editsubcategory = (item, newTitle,newText, newTime) => {
    return {
        type: types.EDIT_SUBCAT,
        payload: { item , newTitle,newText, newTime}
    }
}
export const manageid = () => {
    return {
        type: types.MANAGE_ID
    }
}
