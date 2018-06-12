import React from 'react';
import { observer } from 'mobx-react';
import Chance from 'chance';
import Application from '../frontEndComponents/Application';

const chance = new Chance();

const createFakeAgents = num => {
  const agents = [];

  for (let i = 0; i < num; i++) {
    agents.push(chance.name());
  }

  return agents;
};

@observer
class ApplicationContainer extends React.Component {
  state = {
    listingAgents: createFakeAgents(30),
    formValues: null,
    isFullApplication: true,
  };

  onSubmit = formValues => {
    this.setState({
      formValues,
    });
  };

  setFullApplication = () => {
    if (!this.state.isFullApplication) {
      this.setState({ isFullApplication: true });
    }
  };

  setCreditCheckApplication = () => {
    if (this.state.isFullApplication) {
      this.setState({ isFullApplication: false });
    }
  };

  render() {
    const { listingID, listingAgents } = this.props;
    return (
      <Application
        listingAgents={this.state.listingAgents}
        onSubmit={this.onSubmit}
        isFullApplication={this.state.isFullApplication}
        setFullApplication={this.setFullApplication}
        setCreditCheckApplication={this.setCreditCheckApplication}
      />
    );
  }
}

export default ApplicationContainer;
