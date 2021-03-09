import React, {useState} from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import {Input, Menu, MenuItemProps, Segment} from 'semantic-ui-react';
import NewsContainer from "../NewsContainer/NewsContainer";

const MainLayout: React.FC = () => {

  const history = useHistory()
  const [activeItem, setActiveItem] = useState('news')

  const handleItemClick = (event: React.SyntheticEvent, {name}: MenuItemProps) => {
    if (name) {
      setActiveItem(name)
      history.push(`/${name}`)
    }
  }
  return (
    <div>
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
            <Input icon='search' placeholder='Search...'/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Segment>
        <Switch>
          <Route path={'/news'} component={NewsContainer}/>
          {/*<Redirect to={'/news'}/>*/}
        </Switch>
      </Segment>
    </div>
  );
};

export default MainLayout
