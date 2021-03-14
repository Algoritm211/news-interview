import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {CommentType, NewsType} from '../../types/types';
import classes from './NewsPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentNews, getLoading} from '../../redux/news-selector';
import {checkNewNews, loadComments, loadCurrentNews, setComments} from "../../redux/news-reducer";
import Loader from "../Loader/Loader";
import Comment from "./Comment/Comment";
import cn from 'classnames'
import {Button} from "semantic-ui-react";
import {newsAPI} from "../../api/news-api";

type RouterParams = {
  id: string
}

const NewsPage: React.FC = () => {
  const dispatch = useDispatch()
  const {id} = useParams<RouterParams>()
  const news = useSelector(getCurrentNews)
  const loading = useSelector(getLoading)
  const [commentLoading, setCommentLoading] = useState(false)

  useEffect(() => {
    dispatch(loadCurrentNews(+id))
  }, [dispatch, id])

  const loadNewsComments = async () => {
    setCommentLoading(true)
    if (news.kids) {
      const newsItem = await newsAPI.getNews(news.id)
      const replies = await loadComments(newsItem.kids as Array<number>)
      dispatch(setComments({id: news.id, comments: replies}))
    }
    setCommentLoading(false)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      loadNewsComments()
    }, 60000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  if (loading || !news) {
    return <Loader />
  }

  let commentBlock: any
  if (news?.kids) {
    commentBlock = news.kids.map((comment: CommentType | number) => {
      if (typeof(comment) !== "number") {
        return (
          <Comment comment={comment} key={comment.id}/>
        )
      }
    })
  }

  return (
    <div className={classes.container}>
      <div className="ui two item menu">
        <Link to={'/news'} className="item">
          <i className="arrow alternate circle left icon" /> Go back
        </Link>
        <a className="item" onClick={() => dispatch(loadCurrentNews(+id))}>
          Reload &nbsp;<i className="undo alternate icon"/>
        </a>
      </div>
      <h1 className="ui dividing header">{news.title}</h1>
      <div className={classes.mainLink}>
        <h3 className="ui header">You can go to original news link: </h3>
        <a href={news?.url || '#'} target={'_blank'}>
          Click here
        </a>
      </div>
      <div>
        <h2 className="ui dividing header">
          Comments
          <Button
            className={cn('ui', 'secondary', 'button', classes.reloadBtn)}
            onClick={loadNewsComments}
            loading={commentLoading}>
            Reload Comments
          </Button>
        </h2>
        <div className={classes.commentsBlock}>
          <div className="ui comments">
            {!commentLoading && commentBlock}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
