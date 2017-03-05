import React from 'react';
import {
  Container,
  List,
  NavBar,
  Group,
  View,
  amStyles,
  Badge,
  Switch,
  Card,
  OffCanvas,
  OffCanvasTrigger,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';
var withOffCanvas = {
  title: '红薯',
  rightNav: [{
    icon: 'bars',
    title: '',
    component: OffCanvasTrigger,
    isClone: true, // IMPORTANT
    offCanvas: <OffCanvas><p>红薯</p></OffCanvas>,
  }],
};


const img = <img width="32" src="http://lorempixel.com/128/128/people/" />;
const img80 = <img width="80" src="http://lorempixel.com/160/160/people/" />;
const img40 = <img width="48" src="http://lorempixel.com/160/160/people/" />;
const badge1 = <Badge rounded amStyle="alert">主办</Badge>;
const badge2 = <Badge rounded amStyle="primary">参与</Badge>;
const albums =[
  {
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2006.12.10',
    subTitle:'2323232'
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2006.12.10',


  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  }, {
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  }, {
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  }, {
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  }, {
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  }, {
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  }, {
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  }, {
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
    text:'2323232'
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },{
    title: '我的婚礼',
    subTitle: '认识你是我的缘分',
    after: '2017.3.4',
  //href: 'www.baidu.com',

  },

];

function handleSwitch(e) {
  // get checkbox value
  console.log(this.refs.field.checked);
}

const mySwitch = <Switch onValueChange={handleSwitch} />;
export default class Index extends React.Component {
  static defaultProps = {
    transition: 'rfr'
  };

  renderItems() {
    const pages = [
      'Page1',
      'Page2',
      'Page3',
      'Page4',
    ];

    return pages.map((item, index) => {
      return (
        <List.Item
          linkComponent={Link}
          // 传递 query 参数
          linkProps={{to: {pathname: `/${item.toLowerCase()}`, query: {q: item}}}}

          title={item}
          key={index}
        />
      );
    });
  }

  render() {
    return (
      <View>
        <NavBar
          amStyle="alert"
          title="红属"
          leftNav={[{icon: 'bars'}]}
          {...withOffCanvas}
        />
        <Container scrollable>
            <List style={{fontWeight:'1rem'}}>
              {albums.map((album, i) => {
                return (
                  <List.Item
                    {...album}
                    target="_blank"
                    media=  {img40}
                    desc={album.href}
                    href={i === 0 ? null : album.href}
                    key={i}

                    after={(i%2) == 0 ? badge1 : badge2 }
                    to="/"
                  />
                );
              })}
            </List>


          <Group
            header="红属."
            noPadded
          >
            <List>
              {this.renderItems()}
            </List>
          </Group>
        </Container>

      </View>
    );
  }
}
