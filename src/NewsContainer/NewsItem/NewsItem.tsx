import React from 'react';
import classes from "./NewsItem.module.scss";
import cn from 'classnames'
import {NewsType} from "../../types/types";
import {Button} from "semantic-ui-react";

type PropsType = {
  news: NewsType
}

const NewsItem: React.FC<PropsType> = ({news}) => {
  return (
    <div className={cn('ui', 'card', classes.contentContainer)}>
      <div className="content">
        <div className="header"><a href={news.url}>{news.title}</a></div>
        <div className={classes.metaContainer}>
          <div className="meta">{new Date(news.time).toString().slice(0, 15)} |</div>
          <div className="meta">by {news.by} |</div>
          <div className="meta">type: {news.type}</div>
        </div>

        <div className="description">
        </div>
      </div>
      <div className="extra content">
        <i className="check icon"></i>
        {news.descendants}
      </div>
    </div>
  );
};

export default NewsItem;
