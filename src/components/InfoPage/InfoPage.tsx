import React from 'react';
import cn from 'classnames'
import classes from './InfoPage.module.scss'

const InfoPage: React.FC = () => {
  return (
    <React.Fragment>
      <div className={cn('ui', 'link', 'cards', classes.container)}>
      {/*  <div className="card">*/}
      {/*    <div className="image">*/}
      {/*      <img*/}
      {/*        src="https://avatars.githubusercontent.com/u/60394886?s=460&u=0351face4ac5348d3f5af6dee57c6822b5447380&v=4"/>*/}
      {/*    </div>*/}
      {/*    <div className="content">*/}
      {/*      <div className="header">Alexey Horbunov</div>*/}
      {/*      <div className="meta">*/}
      {/*        <a>Frontend Developer</a>*/}
      {/*      </div>*/}
      {/*      <div className="description">*/}
      {/*        Hello, I`m Alex, JavaScript(ReactJS) developer. Also can write awesome apps on TypeScript(like this)*/}
      {/*        <br/><br/>*/}
      {/*        Check my Github account and see more interesting projects :)*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="extra content">*/}
      {/*<span className="right floated">*/}
      {/*  Joined in 2013*/}
      {/*</span>*/}
      {/*      <span>*/}
      {/*  <i className="user icon"/>*/}
      {/*  75 Friends*/}
      {/*</span>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      </div>
      <div className={cn('ui', 'items', classes.container)}>
        <div className="item">
          <div className="image">
            <img src="https://avatars.githubusercontent.com/u/60394886?s=460&u=0351face4ac5348d3f5af6dee57c6822b5447380&v=4"/>
          </div>
          <div className="content">
            <div className="header">Alexey Horbunov</div>
            <div className="meta">
              <span>Frontend Developer</span>
            </div>
            <div className="description">
              Hello, I`m Alex, JavaScript(ReactJS) developer. Also can write awesome apps on TypeScript(like this)
              <br/><br/>
              Check my Github account and see more interesting projects :)
            </div>
            <div className="extra">
              <div className="ui red ribbon label" tabIndex={0}>
                You can check my projects on GitHub:
              </div>
              <a className="ui animated fade black button" href={'https://github.com/Algoritm211'} target={'_blank'} rel="noreferrer">
                <div className="hidden content"><i className="github square icon normal"/></div>
                <div className="visible content">
                  Go to My Git
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InfoPage;
