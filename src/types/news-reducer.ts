import { NewsType } from "./types";
import {createSlice} from "@reduxjs/toolkit";



export const initialState = {
  news: [] as Array<NewsType>,
  loading: false,
}


const newsReducer = createSlice({
  name: 'newsReducer',
  initialState: {
    news: [] as Array<NewsType>,
    loading: false,
  },
  reducers: {
    newLoadSuccess: (state, action) => {
      state.news = action.payload
    }
  }
})


export const {newLoadSuccess} = newsReducer.actions
export default newsReducer.reducer
