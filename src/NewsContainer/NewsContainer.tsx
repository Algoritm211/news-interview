import React, {useEffect} from 'react';
import NewsItem from './NewsItem/NewsItem';
import {useDispatch, useSelector} from "react-redux";
import {loadNewsList, loadPageNews} from "../types/news-reducer";
import {getListOfNews, getNews} from "../types/news-selector";


const NewsContainer:React.FC = () => {

  const dispatch = useDispatch()
  const listOfNews = useSelector(getListOfNews)
  const news = useSelector(getNews)

  useEffect(() => {
    dispatch(loadNewsList())
  }, [])

  useEffect(() => {
    dispatch(loadPageNews(1))
  }, [listOfNews])

  const newsBlock = news.map((news) => {
    return <NewsItem news={news} key={news.id}/>
  })
  return (
    <div>
      {newsBlock}
    </div>
  );
};

export default NewsContainer;
