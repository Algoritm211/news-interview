import axios from "axios";
import {CommentType, NewsType} from "../types/types";


const instanceAxios = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/'
})


export const newsAPI = {
  getNewsList() {
    return instanceAxios.get<Array<number>>('newstories.json?print=pretty?')
      .then(data => data.data)
  },
  getNews(newsId: number) {
    return instanceAxios.get<NewsType>(`/item/${newsId}.json?print=pretty`)
      .then(data => data.data)
  },
  getComment(commentId: number) {
    return instanceAxios.get<CommentType>(`/item/${commentId}.json?print=pretty`)
      .then(data => data.data)
  }
}
