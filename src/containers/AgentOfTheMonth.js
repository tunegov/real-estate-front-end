import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Chance from 'chance';
import faker from 'faker';
import AgentOfTheMonth from '../components/AgentOfTheMonth';
// import AgentOfTheMonthCarousel from '../components/AgentOfTheMonthCarousel';

const chance = new Chance();

@observer
class AgentOfTheMonthContainer extends Component {
  constructor(props) {
    super(props);

    this._commercialNumbersAgent = {
      name: chance.name(),
      photoURL: faker.image.avatar(),
      profileURL: '#',
      statItem: chance.integer({ min: 5, max: 10 }),
    };
    this._commercialDollarsAgent = {
      name: chance.name(),
      photoURL: faker.image.avatar(),
      profileURL: '#',
      statItem: chance.integer({ min: 1000000, max: 8000000 }),
    };
    this._residentialNumbersAgent = {
      name: chance.name(),
      photoURL: faker.image.avatar(),
      profileURL: '#',
      statItem: chance.integer({ min: 18, max: 40 }),
    };
    this._residentialDollarsAgent = {
      name: chance.name(),
      photoURL: faker.image.avatar(),
      profileURL: '#',
      statItem: chance.integer({ min: 1000000, max: 8000000 }),
    };
  }

  render() {
    const { userUUID } = this.props;
    const {
      _residentialDollarsAgent,
      _residentialNumbersAgent,
      _commercialDollarsAgent,
      _commercialNumbersAgent,
    } = this;
    return (
      <AgentOfTheMonth
        residentialDollarsAgent={_residentialDollarsAgent}
        residentialNumbersAgent={_residentialNumbersAgent}
        commercialDollarsAgent={_commercialDollarsAgent}
        commercialNumbersAgent={_commercialNumbersAgent}
      />
    );
  }
}

export default AgentOfTheMonthContainer;
