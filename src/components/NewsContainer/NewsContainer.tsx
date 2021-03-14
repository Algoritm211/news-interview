import React, {UIEventHandler, useEffect, useState} from 'react';
import NewsItem from './NewsItem/NewsItem';
import {useDispatch, useSelector} from "react-redux";
import {checkNewNews, loadNewsList, loadPageNews, setPage} from "../../redux/news-reducer";
import {getListOfNews, getLoading, getNews, getPage, isNeedUpdate} from "../../redux/news-selector";
import classes from './NewsContainer.module.scss'
import cn from 'classnames'
import {Popup} from 'semantic-ui-react';
import Loader from "../Loader/Loader";


const NewsContainer: React.FC = () => {

  const dispatch = useDispatch()
  const listOfNews = useSelector(getListOfNews)
  const news = useSelector(getNews)
  const page = useSelector(getPage)
  const loading = useSelector(getLoading)
  const isNeedUpdates = useSelector(isNeedUpdate)
  const [isScrollFetching, setIsScrollFetching] = useState(false)

  useEffect(() => {
    dispatch(loadNewsList())
  }, [])

  useEffect(() => {
    dispatch(loadPageNews(page))
  }, [listOfNews])

  // useEffect(() => {
  //   if (isScrollFetching && (news.length !== listOfNews.join('').split(',').length - 1)) {
  //     console.log('sdfsd')
  //     dispatch(loadPageNews(page))
  //     dispatch(setPage({page}))
  //     setIsScrollFetching(false)
  //   }
  // }, [dispatch, isScrollFetching])


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

  //TODO dynamic pagination
  // useEffect(() => {
  //   document.addEventListener("scroll", handleScroll)
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])
  //
  // const handleScroll = (event: any) => {
  //   if (event.target.documentElement.scrollTop + window.innerHeight > event.target.documentElement.offsetHeight - 10) {
  //       setIsScrollFetching(true)
  //   }
  // }

  const reloadButton = (
    <button className={cn('ui', 'secondary', 'button', {'loading': loading}, classes.reloadBtn)}
            onClick={() => dispatch(loadNewsList())}>
      Reload page
    </button>
  )

  return (
    <div className={classes.container}>
      {!loading
        ? newsBlock
        : <Loader/>
      }
      {!loading &&
      <Popup
        content='Check new content, refresh page)'
        open={isNeedUpdates}
        trigger={reloadButton}
      />
      }
      {isScrollFetching && <div>Loading...</div>}
    </div>
  );
};

export default NewsContainer;
