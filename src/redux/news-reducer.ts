import {NewsType} from "../types/types";
import {AsyncThunk, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {newsAPI} from "../api/news-api";
import {chunkArray} from "../helperFuctions/helperFuncs";
import {AppDispatch, AppState} from "../redux/store";
import {isNumber} from "util";


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
    thunkAPI.dispatch(setIsNeedUpdate(false))
    let allData = [] as Array<NewsType>
    for (let i = 0; i < newsArr.length; i++) {
      const news = await newsAPI.getNews(newsArr[i])
      allData.push(news)
    }
    thunkAPI.dispatch(setLoading(false))
    return allData
  }
)

export const checkNewNews = createAsyncThunk<
  void,
  'check',
  {
    dispatch: AppDispatch
    state: AppState
  }
  >(
  'newsReducer/checkNewNews',
  async (check, thunkAPI) => {
    const oldNewsFirstElem = +thunkAPI.getState().newsReducer.newsArray[0][0]
    const newNews = await newsAPI.getNewsList()
    if (newNews[0] !== oldNewsFirstElem) {
      thunkAPI.dispatch(setIsNeedUpdate(true))
    }
  }
)


export const loadCurrentNews = createAsyncThunk<
  NewsType,
  number,
  {
    dispatch: AppDispatch
    state: AppState
  }
  >(
  'newsReducer/checkNewNews',
  async (id, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true))
    const currentNews = await newsAPI.getNews(id)
    thunkAPI.dispatch(setLoading(false))
    return currentNews
  }
)


const newsReducer = createSlice({
  name: 'newsReducer',
  initialState: {
    news: [] as Array<NewsType>,
    newsArray: [] as Array<Array<number>>,
    currentNews: {} as NewsType,
    loading: false,
    page: 1,
    isNeedUpdate: false
  },
  reducers: {
    newLoadSuccess: (state, action) => {
      state.news.push(action.payload)
    },
    setLoading: (state, action:PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setIsNeedUpdate: (state, action) => {
      state.isNeedUpdate = action.payload
    },
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

    builder.addCase(loadCurrentNews.fulfilled, (state, action) => {
      state.currentNews = action.payload
    })
  }
})


export const {newLoadSuccess, setLoading, setIsNeedUpdate} = newsReducer.actions
export default newsReducer.reducer

