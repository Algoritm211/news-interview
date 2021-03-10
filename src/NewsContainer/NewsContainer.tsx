import React, {useEffect} from 'react';
import NewsItem from './NewsItem/NewsItem';
import {useDispatch, useSelector} from "react-redux";
import {loadNewsList, loadPageNews} from "../redux/news-reducer";
import {getListOfNews, getLoading, getNews, getPage} from "../redux/news-selector";
import classes from './NewsContainer.module.scss'
import cn from 'classnames'

const NewsContainer: React.FC = () => {

  const dispatch = useDispatch()
  const listOfNews = useSelector(getListOfNews)
  const news = useSelector(getNews)
  const page = useSelector(getPage)
  const loading = useSelector(getLoading)

  useEffect(() => {
    dispatch(loadNewsList())
  }, [])

  useEffect(() => {
    dispatch(loadPageNews(page))
  }, [listOfNews])

  const newsBlock = news.map((news) => {
    return <NewsItem news={news} key={news.id}/>
  })

  return (
    <div className={classes.container}>
      {!loading
        ? newsBlock
        : <div className="ui active inverted dimmer" style={{height: '100vh'}}>
            <div className="ui large text loader">Loading</div>
          </div>
      }
      {!loading &&
      <button className={cn('ui','secondary', 'button',{'loading': loading}, classes.reloadBtn)}
        onClick={() => dispatch(loadNewsList())}>
        Reload page
      </button>
      }
    </div>
  );
};

export default NewsContainer;
