import {AppState} from "./store";


export const getNews = (state: AppState) => {
  return state.newsReducer.news
}

export const getListOfNews = (state: AppState) => {
  return state.newsReducer.newsArray
}

export const getCurrentNews = (state: AppState) => {
  return state.newsReducer.currentNews
}

export const getPage = (state: AppState) => {
  return state.newsReducer.page
}

export const getLoading = (state: AppState) => {
  return state.newsReducer.loading
}


export const isNeedUpdate = (state: AppState) => {
  return state.newsReducer.isNeedUpdate
}
