import React from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  withRouter,
} from 'react-router';
import {
  Container,
  TabBar,
} from 'amazeui-touch';


class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  render() {
    const {
      location,
      params,
      children,
      ...props,
    } = this.props;
    const {
      router
    } = this.context;
    const transition = children.props.transition || 'sfr';

    return (
      <Container direction="column" id="sk-container">
        <Container
          transition={transition}
          // fade transition example
           transition='fade'
           transitionEnterTimeout={450}
           transitionLeaveTimeout={300}
        >
          {React.cloneElement(children, {key: location.key})}
        </Container>

        <TabBar
          amStyle="alert"
        >
          <TabBar.Item
            component={Link}
            icon="home"
            title="红薯"
            selected={router.isActive('/home', true)}
            to="/home"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="list"
            title="风俗汇"
            selected={router.isActive('/total', true)}
            to="/total"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="list"
            title="文化圈"
            selected={router.isActive('/culture', true)}
            to="/culture"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="person"
            title="我的"
            //badge="404"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/about', true)}
            to="/about"
            onlyActiveOnIndex
          />
        </TabBar>
      </Container>
    );
  }
}

// Pages
import Index from './pages/Index';
import Page from './pages/Page';
import total from './pages/Page2'
import about from './pages/Page4'
import home from './pages/Index'
import culture from  './pages/Page3'
// withRouter HoC
// @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/upgrade-guides/v2.4.0.md#v240-upgrade-guide
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="home" component={home} />
      <Route path="total" component={total} />
      <Route path="about" component={about} />
      <Route path="culture" component={culture} />


    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
