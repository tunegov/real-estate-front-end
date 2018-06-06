import React, { Component } from 'react';
import { observer } from 'mobx-react';
import AgentDashboard from '../components/AgentDashboard';

@observer
class DashboardContainer extends Component {
  render() {
    return (
      <AgentDashboard userUUID={this.props.userUUID} />
    );
  }
}

export default DashboardContainer;
