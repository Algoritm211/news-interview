import React, {LegacyRef, MutableRefObject, UIEventHandler, useEffect, useRef, useState} from 'react';
import NewsItem from './NewsItem/NewsItem';
import {useDispatch, useSelector} from "react-redux";
import {checkNewNews, loadNewsList, loadPageNews, setLoading, setPage} from "../../redux/news-reducer";
import {getListOfNews, getLoading, getNews, getPage, isNeedUpdate} from "../../redux/news-selector";
import classes from './NewsContainer.module.scss'
import cn from 'classnames'
import {Popup} from 'semantic-ui-react';
import Loader from "../Loader/Loader";
import MiniLoader from "../MiniLoader/MiniLoader";


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
    dispatch(loadNewsList())
  }, [])

  useEffect(() => {
    dispatch(loadPageNews({page, loadingType: "reload"}))
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
  }, [])

  const newsBlock = news.map((_news) => {
    if (_news) {
      return <NewsItem news={_news} key={_news.id}/>
    }
  })

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

  const reloadButton = (
    <button className={cn('ui', 'secondary', 'button', classes.reloadBtn)}
            onClick={() => dispatch(loadNewsList())}>
      {isLoading ? 'Loading...' : 'Reload page'}
    </button>
  )
  return (
    <div className={classes.container} ref={containerRef}>
      {newsBlock}
      {isLoading && < MiniLoader />}

      <Popup
        content='Check new content, refresh page)'
        open={isNeedUpdates}
        trigger={reloadButton}
      />
    </div>
  );
};

export default NewsContainer;
