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

    this._commercialDollarsAgent = {
      name: chance.name(),
      photoURL: faker.image.avatar(),
      profileURL: '#',
      statItem: chance.integer({ min: 1000000, max: 8000000 }),
    };
    this._residentialDollarsAgent = {
      name: chance.name(),
      photoURL: faker.image.avatar(),
      profileURL: '#',
      statItem: chance.integer({ min: 1000000, max: 8000000 }),
    };
    this._rentalsDollarsAgent = {
      name: chance.name(),
      photoURL: faker.image.avatar(),
      profileURL: '#',
      statItem: chance.integer({ min: 1000000, max: 8000000 }),
    };
    this._numbersAgent = {
      name: chance.name(),
      photoURL: faker.image.avatar(),
      profileURL: '#',
      statItem: chance.integer({ min: 40, max: 120 }),
    };
  }

  render() {
    const { userUUID } = this.props;
    const {
      _residentialDollarsAgent,
      _commercialDollarsAgent,
      _rentalsDollarsAgent,
      _numbersAgent,
    } = this;
    return (
      <AgentOfTheMonth
        residentialDollarsAgent={_residentialDollarsAgent}
        commercialDollarsAgent={_commercialDollarsAgent}
        rentalsDollarsAgent={_rentalsDollarsAgent}
        numbersAgent={_numbersAgent}
      />
    );
  }
}

export default AgentOfTheMonthContainer;
