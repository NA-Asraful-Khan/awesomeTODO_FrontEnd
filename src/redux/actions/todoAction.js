import axios from 'axios'
import { ADDNEW_TODO } from './type.js'

const API_URL = 'http://localhost:8000'

export const addNewTodo=(data)=> async(dispatch)=>{
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });

        dispatch({ type: ADDNEW_TODO , payload: res.data });
    } catch (error) {
        console.log(error.message);
    }
}

export const getAllTodo=(data)=> async(dispatch)=>{
    try {
        const res = await axios.get(`${API_URL}/todos`);

        // dispatch({ type: ADDNEW_TODO , payload: res.data });
    } catch (error) {
        console.log("Error while calling GetAllTodos",error.message);
    }
}