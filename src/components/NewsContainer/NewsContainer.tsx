import React, {useEffect, useRef, useState} from 'react';
import NewsItem from './NewsItem/NewsItem';
import {useDispatch, useSelector} from "react-redux";
import {checkNewNews, loadNewsList, loadPageNews} from "../../redux/news-reducer/news-reducer";
import {getListOfNews, getLoading, getNews, getPage, isNeedUpdate} from "../../redux/news-reducer/news-selector";
import classes from './NewsContainer.module.scss'
import cn from 'classnames'
import {Popup} from 'semantic-ui-react';
import MiniLoader from "../MiniLoader/MiniLoader";
import { setPage } from '../../redux/news-reducer/news-reducer';


const NewsContainer: React.FC = () => {

  const dispatch = useDispatch()
  const listOfNews = useSelector(getListOfNews)
  const news = useSelector(getNews)
  const page = useSelector(getPage)
  const isLoading = useSelector(getLoading)
  const isNeedUpdates = useSelector(isNeedUpdate)
  const [isScrollFetching, setIsScrollFetching] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (listOfNews.length === 0) {
      dispatch(loadNewsList())
    }
  }, [dispatch])

  useEffect(() => {
    if (news.length === 0) {
      dispatch(loadPageNews({page: 1, loadingType: "reload"}))
    }
  }, [listOfNews])

  useEffect(() => {
    if (isScrollFetching) {
      dispatch(loadPageNews({page: page + 1, loadingType: "addNew"}))
      dispatch(setPage({page: page + 1}))
      setIsScrollFetching(false)
    }
  }, [dispatch, isScrollFetching])


  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(checkNewNews('check'))
    }, 60000)
    return () => {
      clearInterval(intervalId)
    }
  }, [dispatch])


  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [isLoading])

  const handleScroll = (event: any) => {
    if (containerRef.current !== null) {
      if (event.target.documentElement.scrollTop + window.innerHeight - 83 > containerRef.current.scrollHeight && !isScrollFetching && !isLoading) {
        setIsScrollFetching(true)
      }
    }
  }

  const onReload = () => {
    dispatch(loadNewsList())
    dispatch(loadPageNews({page: 1, loadingType: "reload"}))
  }

  const newsBlock = news.map((newsItem) => {
    if (newsItem) {
      return <NewsItem news={newsItem} key={newsItem.id}/>
    }
  })

  const reloadButton = (
    <button className={cn('ui', 'secondary', 'button', classes.reloadBtn)}
            onClick={onReload}>
      {isLoading ? 'Loading...' : 'Reload page'}
    </button>
  )
  return (
    <div className={classes.container} ref={containerRef}>
      {newsBlock}
      {isLoading && < MiniLoader/>}

      <Popup
        content='Check new content, refresh page)'
        open={isNeedUpdates}
        trigger={reloadButton}
      />
    </div>
  );
};

export default NewsContainer;
