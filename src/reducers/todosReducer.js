import { createSlice, createReducer } from "redux-starter-kit";

// const {actions, reducer : todosReducer} = createSlice()

const {actions, reducer : todosReducer} = createSlice({
  slice: "todos",
  initialState: {},
  reducers: {
    loadTodos(state, action) {
      const items = action.payload
      items.map((item, index) => {
        state.push(item)
      })
    }
  }
});

export default todosReducer

export const {loadTodos} = actions

export const fetchTodos = () => async (dispatch) => {
  dispatch(loadTodos([{ title:'async todo' }]))
  //  const todos = await fetch("/p1/todos")
  //  .then(resp => resp.json())
  //  .then(resp => {
  //    dispatch(loadTodos(resp))
  //  })
  //  .catch(error => {
  //    console.log(error)
  //  })
}

// export const fetchTodos = () => async (dispatch) => {
//   try {
//     const todos = await fetch("/p1/todos")
//     dispatch(loadTodos(todos))
//   } catch(error) {
//     console.log(error)
//   }
// }
