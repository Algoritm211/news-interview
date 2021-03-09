import React from 'react';
import NewsItem from './NewsItem/NewsItem';

const NewsContainer:React.FC = () => {
  return (
    <div>
      <NewsItem />
      <NewsItem />
    </div>
  );
};

export default NewsContainer;
