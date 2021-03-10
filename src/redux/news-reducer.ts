import {NewsType} from "../types/types";
import {AsyncThunk, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {newsAPI} from "../api/news-api";
import {chunkArray} from "../helperFuctions/helperFuncs";
import {AppDispatch, AppState} from "../redux/store";


export const initialState = {
  news: [] as Array<NewsType>,
  loading: false,
}

export const loadNewsList = createAsyncThunk(
  'newsReducer/loadNews',
  async (thunkAPI) => {
    const data = await newsAPI.getNewsList()

    return data
  }
)

export const loadPageNews = createAsyncThunk<
  Array<NewsType>,
  number,
  {
    dispatch: AppDispatch
    state: AppState
  }>(
  'newsReducer/loadPageNews',
  async (page, thunkAPI) => {
    const newsArr = thunkAPI.getState().newsReducer.newsArray[page - 1]
    thunkAPI.dispatch(setLoading(true))
    let allData = [] as Array<NewsType>
    for (let i = 0; i < newsArr.length; i++) {
      const news = await newsAPI.getNews(newsArr[i])
      allData.push(news)
    }
    thunkAPI.dispatch(setLoading(false))
    return allData
  }
)

// export const checkNew


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
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(loadNewsList.fulfilled, (state, action) => {
      const dividedForPagesArray = chunkArray(action.payload, 10)
      state.newsArray = dividedForPagesArray
    })

    builder.addCase(loadPageNews.fulfilled, (state, action) => {
      console.log('All news loaded')
      state.news = action.payload
    })
  }
})


export const {newLoadSuccess, setLoading} = newsReducer.actions
export default newsReducer.reducer

