import React, {useEffect} from 'react';
import NewsItem from './NewsItem/NewsItem';
import {useDispatch, useSelector} from "react-redux";
import {checkNewNews, loadNewsList, loadPageNews} from "../../redux/news-reducer";
import {getListOfNews, getLoading, getNews, getPage, isNeedUpdate} from "../../redux/news-selector";
import classes from './NewsContainer.module.scss'
import cn from 'classnames'
import { Popup } from 'semantic-ui-react';
import Loader from "../Loader/Loader";


const NewsContainer: React.FC = () => {

  const dispatch = useDispatch()
  const listOfNews = useSelector(getListOfNews)
  const news = useSelector(getNews)
  const page = useSelector(getPage)
  const loading = useSelector(getLoading)
  const isNeedUpdates = useSelector(isNeedUpdate)

  useEffect(() => {
    dispatch(loadNewsList())
  }, [])

  useEffect(() => {
    dispatch(loadPageNews(page))
  }, [listOfNews])

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(checkNewNews('check'))
    }, 60000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const newsBlock = news.map((news) => {
    return <NewsItem news={news} key={news.id}/>
  })

  const reloadButton = (
    <button className={cn('ui','secondary', 'button',{'loading': loading}, classes.reloadBtn)}
            onClick={() => dispatch(loadNewsList())}>
      Reload page
    </button>
  )

  return (
    <div className={classes.container}>
      {!loading
        ? newsBlock
        : <Loader />
      }
      {!loading &&
      <Popup
        content='Check new content, refresh page)'
        open={isNeedUpdates}
        trigger={reloadButton}
      />
      }
    </div>
  );
};

export default NewsContainer;
