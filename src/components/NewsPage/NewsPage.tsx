import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { NewsType } from '../../types/types';
import classes from './NewsPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentNews, getLoading} from '../../redux/news-selector';
import {loadCurrentNews} from "../../redux/news-reducer";
import Loader from "../Loader/Loader";

type RouterParams = {
  id: string
}

const NewsPage:React.FC = () => {
  const dispatch = useDispatch()
  const {id} = useParams<RouterParams>()
  const news = useSelector(getCurrentNews)
  const loading = useSelector(getLoading)

  useEffect(() => {
    dispatch(loadCurrentNews(+id))
  }, [dispatch, id])

  if (loading) {
    return <Loader />
  }

  return (
    <div className={classes.container}>
      <h1 className="ui dividing header">{news.title}</h1>
      <div className={classes.mainLink}>
        <h3 className="ui header">You can go to original news link: </h3>
        <a href={news?.url || '#'} target={'_blank'}>
          Click here
        </a>
      </div>
      <div>
        <h2 className="ui dividing header">Comments</h2>
        <div className={classes.commentsBlock}>
          Comment
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
