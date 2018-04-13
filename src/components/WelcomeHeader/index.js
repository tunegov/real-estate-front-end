import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { JumbotronWrapper, JumbotronImg, JumbotronImgOverlay } from './styledComponents';

@observer
class WelcomHeader extends Component {
  componentDidMount() {
    document.getElementById('jumbotron-img').src = '/static/breather-red.jpg';
  }

  render() {
    return (
      <JumbotronWrapper>
        <JumbotronImg src="/static/breather-red.jpg" id="jumbotron-img" alt="Loft room" />
        <JumbotronImgOverlay />
        <h1 style={{ marginTop: 0, color: '#fff' }}>Hey!!!!</h1>
      </JumbotronWrapper>
    );
  }
}

export default WelcomHeader;
