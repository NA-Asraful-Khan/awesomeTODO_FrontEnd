import { ADDNEW_TODO } from "../actions/type";

export const todosReducers = (state =[],action)=>{

    switch(action.type){
        case ADDNEW_TODO:
            return [action.paylode,...state]
            default:
                return state;
    }
    
}