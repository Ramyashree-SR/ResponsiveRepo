import { createSlice } from '@reduxjs/toolkit'
                                                       // samee as [todo,setTodo]=usestate([]) 

const initialState = {                                     //usestate([])
  todoList:[]
}

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo(state,action){                                    //here state is like todo
        state.todoList.push(action.payload)                  //setTodo
    }
  }
})

export const {saveTodo} = TodoSlice.actions

export default TodoSlice.reducer