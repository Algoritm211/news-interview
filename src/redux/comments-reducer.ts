import {createSlice} from "@reduxjs/toolkit";
import {CommentType} from "../types/types";


const commentReducer = createSlice({
  name: 'commentReducer',
  initialState: {
    comments: [] as Array<CommentType>,
    loading: false
  },
  reducers: {
    setComments: (state, action) => {
      state.comments.push(action.payload)
    }
  }
})

export const {setComments} = commentReducer.actions

export default commentReducer.reducer
