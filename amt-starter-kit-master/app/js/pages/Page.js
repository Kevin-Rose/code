import React from 'react';
import {
  View,
  NavBar,
  List,
  Badge,
  Card,
  Switch,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import NotFound from './NotFound';


const pages = {
  Page1,
  Page2,
};

const itemSearch = {
  href: '',
  icon: 'search'
};

const itemPlus = {
  href: '',
  icon: 'plus'
};

const dataRight = {
  title: '',
  rightNav: [itemSearch, itemPlus],
  onAction: clickHandler,
};
const badge1 = <Badge rounded amStyle="alert">5</Badge>;
const clickHandler = (item, e) => {
  e.preventDefault();
  console.log(item);
};
class Page extends React.Component {
  render() {
    let page = this.props.params.page;
    // 使用 query
    console.log(this.props.location.query);
    alert(JSON.stringify(this.props.location));

    if (page) {
      page = page.charAt(0).toUpperCase() + page.slice(1);

    }

    const Component = pages[page] || NotFound;
    const backNav = {
      icon: '',
      title: '红属',

    };
    const rightNav = {
      icon: 'plus' ,

    };
    return (
      <View>

        <NavBar
          title={page}
          leftNav={[backNav]}
          amStyle="alert"
        {...dataRight}
        />


        <Component scrollable />

      </View>
    );
  }
}

export default Page;
