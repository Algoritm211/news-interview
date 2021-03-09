import { NewsType } from "./types";
import {AsyncThunk, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import { newsAPI } from "../api/news-api";
import { chunkArray } from "../helperFuctions/helperFuncs";
import {AppDispatch, AppState} from "../redux/store";



export const initialState = {
  news: [] as Array<NewsType>,
  loading: false,
}

export const loadNewsList = createAsyncThunk(
  'newsReducer/loadNews',
  async () => {
    const data = await newsAPI.getNewsList()
    return data as Array<number>
  }
)

export const loadPageNews = createAsyncThunk<
  boolean,
  number,
  {
    dispatch: AppDispatch
    state: AppState
  }
  >(
  'newsReducer/loadPageNews',
  async (page, thunkAPI) => {
    const newsArr = thunkAPI.getState().newsReducer.newsArray[page - 1]
    let allData = [] as Array<NewsType>
    for (let i = 0; i < newsArr.length; i++) {
      const news = await newsAPI.getNews(newsArr[i])
      thunkAPI.dispatch(newLoadSuccess(news))
      allData.push(news)
    }
    return true
  }
)


const newsReducer = createSlice({
  name: 'newsReducer',
  initialState: {
    news: [] as Array<NewsType>,
    newsArray: [] as Array<Array<number>>,
    loading: false,
    page: 1
  },
  reducers: {
    newLoadSuccess: (state, action) => {
      state.news.push(action.payload)
    },
  },
  extraReducers: builder => {
    builder.addCase(loadNewsList.fulfilled, (state, action) => {
      const dividedForPagesArray = chunkArray(action.payload, 100)
      state.newsArray = dividedForPagesArray
    })

    builder.addCase(loadPageNews.fulfilled, (state, action) => {
      console.log('All news loaded')
    })
  }
})


export const {newLoadSuccess} = newsReducer.actions
export default newsReducer.reducer

