import React from 'react';
import classes from "./NewsItem.module.scss";
import cn from 'classnames'
import {NewsType} from "../../types/types";

type PropsType = {
  news: NewsType
}

const NewsItem: React.FC<PropsType> = ({news}) => {
  return (
    <div className={cn('ui', 'card', classes.contentContainer)}>
      <div className="content">
        <div className="header"><a href={news.url} target={'_blank'}>{news.title}</a></div>
        <div className={classes.metaContainer}>
          <div className="meta">{new Date(news.time * 1000).toString().slice(4, 21)} |</div>
          <div className="meta">by {news.by} |</div>
          <div className="meta">type: {news.type} |</div>
          <div className="meta">Rating: {news.descendants}</div>
        </div>

        <div className="description">
        </div>
      </div>
      <div className="extra content">
        <div>

        </div>
        <i className="check icon"></i>
        Comments: {news.kids?.length || 0}
      </div>
    </div>
  );
};

export default NewsItem;
