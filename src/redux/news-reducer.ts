import {CommentType, NewsType} from "../types/types";
import {AsyncThunk, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {newsAPI} from "../api/news-api";
import {chunkArray} from "../helperFuctions/helperFuncs";
import {AppDispatch, AppState} from "../redux/store";


type ThunkAPI = {
  dispatch: AppDispatch
  state: AppState
}

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

export const loadPageNews = createAsyncThunk<{
  allData: Array<NewsType>,
  loadingType: 'reload' | 'addNew',
}, { page: number, loadingType: 'reload' | 'addNew' }, ThunkAPI>(
  'newsReducer/loadPageNews',
  async (loadInfo, thunkAPI) => {
    const newsArr = thunkAPI.getState().newsReducer.newsArray[loadInfo.page - 1]
    thunkAPI.dispatch(setLoading(true))
    thunkAPI.dispatch(setIsNeedUpdate(false))
    let allData = [] as Array<NewsType>
    for (let i = 0; i < newsArr.length; i++) {
      const news = await newsAPI.getNews(newsArr[i])
      allData.push(news)
    }
    thunkAPI.dispatch(setLoading(false))
    return {allData, loadingType: loadInfo.loadingType}
  }
)

export const checkNewNews = createAsyncThunk<void, 'check', ThunkAPI>(
  'newsReducer/checkNewNews',
  async (check, thunkAPI) => {
    const oldNewsFirstElem = +thunkAPI.getState().newsReducer.newsArray[0][0]
    const newNews = await newsAPI.getNewsList()
    if (newNews[0] !== oldNewsFirstElem) {
      thunkAPI.dispatch(setIsNeedUpdate(true))
    }
  }
)


export const loadCurrentNews = createAsyncThunk<NewsType, number, ThunkAPI>(
  'newsReducer/checkNewNews',
  async (id, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true))
    const currentNews = await newsAPI.getNews(id)
    if (currentNews.kids) {
      const comments = await loadComments(currentNews.kids as Array<number>)
      currentNews.kids = comments
    }
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
    isLoading: true,
    page: 1,
    isNeedUpdate: false
  },
  reducers: {
    setComments: (state, action: PayloadAction<{ id: number, comments: Array<CommentType> }>) => {
      state.news.map(news => {
        if (news.id === action.payload.id) {
          news.kids = action.payload.comments
        }
      })
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setIsNeedUpdate: (state, action) => {
      state.isNeedUpdate = action.payload
    },
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page
    }
  },
  extraReducers: builder => {
    builder.addCase(loadNewsList.fulfilled, (state, action) => {
      const dividedForPagesArray = chunkArray(action.payload, 40)
      state.newsArray = dividedForPagesArray
    })

    builder.addCase(loadPageNews.fulfilled, (state, action) => {
      console.log('All news loaded')
      if (action.payload.loadingType === 'reload') {
        state.news = action.payload.allData
      } else {
        state.news.push(...action.payload.allData)
      }
    })

    builder.addCase(loadCurrentNews.fulfilled, (state, action) => {
      state.currentNews = action.payload
    })
  }
})


export const {setComments, setLoading, setIsNeedUpdate, setPage} = newsReducer.actions
export default newsReducer.reducer

export async function loadComments(commentsIds: Array<number>) {
  let allCommentsPromise = []
  for (let i = 0; i < commentsIds.length; i++) {
    allCommentsPromise.push(newsAPI.getComment(+commentsIds[i]))
  }
  const comments = await Promise.all(allCommentsPromise)

  return comments as Array<CommentType>
}
