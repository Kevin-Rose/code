import React from 'react';

import {
  Container,
  Group
} from 'amazeui-touch';
export default class Page3 extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <Group>
          <h2>Page 3</h2>
          <p>页面内容</p>
        </Group>
      </Container>
    );
  }
}
