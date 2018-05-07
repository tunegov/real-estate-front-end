import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DealsSummary from '../components/DealsSummary';


@observer
class DealsSummaryContainer extends Component {
  render() {
    return (
      <div>
        <DealsSummary userUUID={this.props.userUUID} />
      </div>
    );
  }
}

export default DealsSummaryContainer;
