import {createSlice} from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        lists:[],
        editing:[]
    },
    reducers:{
        addTodo:(state , action) =>{
            action.payload.length===0? alert("Please add task"):
            state.lists.push(action.payload)
            console.log(state.lists.length)


        },
        removeTodo:(state, action)=>{
            const indexToRemove = action.payload;
            state.lists.splice(indexToRemove, 1);
        },
        editTodo:(state, action)=>{
            const indexToEdit = action.payload;
            const { index, updatedTodo } = action.payload;
            state.lists[index] = updatedTodo.trim();



        }
    }

})
export const {addTodo , removeTodo, editTodo} = todoSlice.actions
export default todoSlice.reducer;