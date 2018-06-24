import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import { DotLoader } from 'react-spinners';
import Chance from 'chance';
import faker from 'faker';
import AgentsTable from '../components/AgentsTable';

const chance = new Chance();

const Loader = DotLoader;

const styles = theme => ({
  root: {
    position: 'relative',
  },
  progress: {
    margin: theme.spacing.unit * 2,
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'block',
  },
  progressWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '60px 20px',
    borderRadius: '3px',
    backgroundColor: '#fff',
    zIndex: 2,
  },
});

const columns = [
  { name: 'agentID', title: 'Agent ID' },
  { name: 'photo', title: 'Photo' },
  { name: 'name', title: 'Name' },
  { name: 'email', title: 'Email' },
  { name: 'areaOfFocus', title: 'Area of Focus' },
  { name: 'mobileNumber', title: 'Mobile Number' },
  { name: 'companyNumberAndExt', title: 'Company Number/Extension' },
  { name: 'region', title: 'Region' },
  { name: 'view', title: 'View Profile' },
];

@observer
class AgentsTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableIsLoading: true,
      rows: this.createRows(2780),
    };
  }

  createRows = numOfRows => {
    const rows = [];
    for (let i = 0; i < numOfRows; i++) {
      rows.push({
        agentID: chance.integer({ min: 100000, max: 999999 }),
        photo: {
          imageURL: faker.image.avatar(),
          id: chance.integer({ min: 100000, max: 999999 }),
        },
        name: chance.name(),
        email: chance.email(),
        areaOfFocus: 'none',
        mobileNumber: chance.phone(),
        companyNumberAndExt: `${chance.phone()} x${chance.integer({
          min: 1,
          max: 999,
        })}`,
        region:
          chance.integer({ min: 0, max: 100 }) > 70
            ? chance.state({ full: true })
            : 'New York',
        view: {
          route: 'agent',
          id: chance.integer({ min: 100000, max: 999999 }),
        },
      });
    }
    return rows;
  };

  render() {
    const { tableIsLoading, rows } = this.state;
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.root}>
        {tableIsLoading ? (
          <div
            className={classes.progressWrapper}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Loader color="#f44336" loading />
          </div>
        ) : null}
        <AgentsTable
          {...rest}
          onMount={() =>
            tableIsLoading ? this.setState({ tableIsLoading: false }) : null
          }
          columns={columns}
          rows={rows}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AgentsTableContainer);
