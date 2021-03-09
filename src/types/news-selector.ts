import {AppState} from "../redux/store";


export const getNews = (state: AppState) => {
  return state.newsReducer.news
}
