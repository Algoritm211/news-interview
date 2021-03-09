import React from 'react';
import classes from "./NewsItem.module.scss";
import cn from 'classnames'


const NewsItem: React.FC = () => {
  return (
    <div className={cn('ui', 'card', classes.contentContainer)}>
      <div className="content">
        <div className="header">Cute Dog</div>
        <div className={classes.metaContainer}>
          <div className="meta">{new Date(1615310708).toString().slice(0, 15)} |</div>
          <div className="meta">by Alex |</div>
          <div className="meta">type story</div>
        </div>

        <div className="description">
          <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others
            for their tiny stature, and even others for their massive size.</p>
          <p>Many people also have their own barometers for what makes a cute dog.</p>
        </div>
      </div>
      <div className="extra content">
        <i className="check icon"></i>
        121 Votes
      </div>
    </div>
  );
};

export default NewsItem;
