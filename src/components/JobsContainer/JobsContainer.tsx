import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./JobsContainer.module.scss";

const JobsContainer: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className="card">
        <div className="content">
          <div className="header">

          </div>
          <div className="meta">
            This page now is in development
          </div>
          <div className="description">
            Please, go to News or Info page)
          </div>
        </div>
        <div className="extra content">
          <div className={classes.buttons}>
            <Link to={'/news'}><div className="ui basic green button">News</div></Link>
            <Link to={'/info'}><div className="ui basic blue button">Info</div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsContainer;
