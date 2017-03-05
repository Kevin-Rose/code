import React from 'react';
import {
  Container,
  Group,Badge,
  List,OffCanvasTrigger,OffCanvas,
NavBar,
} from 'amazeui-touch';
const img40 = <img width="72" src="http://lorempixel.com/160/160/people/" />;

const itemSearch = {
  href: '',
  icon: 'gear'
};

const itemPlus = {
  href: '',
  icon: ''
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
const backNav = {
  icon: '',
  title: '',

};
const rightNav = {
  icon: 'plus' ,

};
export default class Page4 extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <NavBar
          title='我的'
         // leftNav={[backNav]}
          amStyle="alert"
         // {...dataRight}
          rightNav={[itemSearch]}
        />

        <List>
          <List.Item
            //  after: '2006.12.10'
            media=  {img40}
            title=  '刘涛'
            subTitle = '红属号: 13349879541'
            target="_blank"
            href=''
            to="/"
          />
        </List>
        <Group
          header=""
          noPadded
        >
          <List>
            <List.Item href="#" title="家谱" />
            <List.Item href="#" title="我的亲人" />
          </List>
        </Group>



        <Group
          header=""
          noPadded
        >
          <List>
            <List.Item href="#" title="活动统计" />
            <List.Item href="#" title="红包统计" />
            <List.Item href="#" after={badge1} title="我的收藏" />
          </List>
        </Group>

        <Group
          header=""
          noPadded
        >
          <List>
            <List.Item href="#" title="设置" />
          </List>
        </Group>
        <Group>
          <h2>Rose.</h2>
        </Group>
      </Container>
    );
  }
}
