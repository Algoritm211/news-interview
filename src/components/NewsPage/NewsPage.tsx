import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {CommentType, NewsType} from '../../types/types';
import classes from './NewsPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentNews, getLoading} from '../../redux/news-selector';
import {loadCurrentNews} from "../../redux/news-reducer";
import Loader from "../Loader/Loader";
import Comment from "./Comment/Comment";

type RouterParams = {
  id: string
}

const NewsPage: React.FC = () => {
  const dispatch = useDispatch()
  const {id} = useParams<RouterParams>()
  const news = useSelector(getCurrentNews)
  const loading = useSelector(getLoading)

  useEffect(() => {
    dispatch(loadCurrentNews(+id))
  }, [dispatch, id])

  if (loading) {
    return <Loader/>
  }

  let commentBlock:any
  if (news.kids) {
    commentBlock = news.kids.map((comment: CommentType | number) => {
      if (typeof(comment) !== "number") {
        return (
          <Comment comment={comment} key={comment.id}/>
        )
      }
    })
  }
  // console.log(news)

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
          <div className="ui comments">
            {commentBlock}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
