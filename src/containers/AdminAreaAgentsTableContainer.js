import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import { DotLoader } from 'react-spinners';
import Chance from 'chance';
import faker from 'faker';
import AdminAreaAgentsTable from '../components/AdminAreaAgentsTable';

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
  { name: 'realEstateLicenseNumber', title: 'RE License Number' },
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
class AdminAreaAgentsTableContainer extends Component {
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
        realEstateLicenseNumber: chance.integer({ min: 1, max: 2000000000 }),
        photo: { imageURL: faker.image.avatar(), profileURL: '#' },
        name: chance.name(),
        email: chance.email(),
        areaOfFocus: 'none',
        mobileNumber: chance.phone(),
        companyNumberAndExt: `${chance.phone()} x${chance.integer({ min: 1, max: 999 })}`,
        region: chance.integer({ min: 0, max: 100 }) > 70 ? chance.state({ full: true }) : 'New York',
        view: '#',
      });
    }
    return rows;
  };

  render() {
    const { tableIsLoading, rows } = this.state;
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.root}>
        {
          tableIsLoading ? (
            <div className={classes.progressWrapper} style={{ display: 'flex', justifyContent: 'center' }}>
              <Loader
                color="#f44336"
                loading
              />
            </div>
          ) : null
        }
        <AdminAreaAgentsTable
          {...rest}
          onMount={() => tableIsLoading ? this.setState({ tableIsLoading: false }) : null}
          columns={columns}
          rows={rows}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AdminAreaAgentsTableContainer);
