import axios from "axios";
import {NewsType} from "../types/types";


const instanceAxios = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/'
})


export const newsAPI = {
  getNews() {
    return instanceAxios.get<Array<number>>('newstories.json?print=pretty?')
      .then(data => data.data)
    //TODO make objects page-array from data
  }
}
