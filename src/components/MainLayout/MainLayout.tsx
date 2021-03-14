import React, {useState} from 'react';
import {Redirect, Route, Switch, useHistory, useParams} from 'react-router-dom';
import {Input, Menu, MenuItemProps, Segment} from 'semantic-ui-react';
import NewsContainer from "../NewsContainer/NewsContainer";
import NewsPage from "../NewsPage/NewsPage";
import JobsContainer from "../JobsContainer/JobsContainer";
import InfoPage from "../InfoPage/InfoPage";
import classes from './MainLayout.module.scss'


const MainLayout: React.FC = () => {

  const history = useHistory()
  const params = history.location.pathname.slice(1)
  const [activeItem, setActiveItem] = useState(params)
  const handleItemClick = (event: React.SyntheticEvent, {name}: MenuItemProps) => {
    if (name) {
      setActiveItem(name)
      history.push(`/${name}`)
    }
  }
  return (
    <React.Fragment>
      <Menu pointing>
        <Menu.Item
          name='news'
          active={activeItem === 'news'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='jobs'
          active={activeItem === 'jobs'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='info'
          active={activeItem === 'info'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <span className={classes.author}> By Alexey Horbunov</span>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Segment>
        <Switch>
          <Route path={'/news'} exact component={NewsContainer}/>
          <Route path={'/news/:id'} component={NewsPage}/>
          <Route path={'/jobs'} component={JobsContainer} />
          <Route path={'/info'} component={InfoPage} />
          <Redirect to={'/news'}/>
        </Switch>
      </Segment>
    </React.Fragment>
  );
};

export default MainLayout
