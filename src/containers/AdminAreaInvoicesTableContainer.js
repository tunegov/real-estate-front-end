import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import { DotLoader } from 'react-spinners';
import Chance from 'chance';
import isBrowser from 'is-browser';
import AdminAreaInvoicesTable from '../components/AdminAreaInvoicesTable';
import { round } from '../utils/Math';

const chance = new Chance();

const Loader = DotLoader;

const returnAgentType = number => {
  if (number < 33) {
    return 60;
  } else if (number < 66) {
    return 70;
  } else {
    return 80;
  }
};

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
  { name: 'invoiceID', title: 'Invoice ID' },
  { name: 'date', title: 'Date' },
  { name: 'agentName', title: 'Agent Name' },
  { name: 'agentType', title: 'Agent Type' },
  { name: 'dealType', title: 'Deal Type' },
  { name: 'clientName', title: 'Client Name' },
  { name: 'clientPhoneNumber', title: 'Client Phone Number' },
  { name: 'propertyAddress', title: 'Property Address' },
  { name: 'propertyCity', title: 'Property City' },
  { name: 'managementOrCobrokeCompany', title: 'Mgmt/Co-Broke Co.' },
  { name: 'rentOrSalePrice', title: 'Rent/Sale Price' },
  { name: 'totalAmount', title: 'Total Amount' },
  { name: 'status', title: 'Status' },
  { name: 'view', title: 'View' },
];

@observer
class InvoicesTableContainer extends Component {
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
      const rentOrSalePrice = chance.dollar().substring(1);
      rows.push({
        invoiceID: chance.integer({ min: 1, max: 2000000000 }),
        date: chance.date({ string: true }),
        agentName: chance.name(),
        agentType: returnAgentType(chance.integer({ min: 0, max: 100 })),
        dealType: chance.bool() === true ? 'Residential' : 'Commercial',
        clientName: chance.name(),
        clientPhoneNumber: chance.phone(),
        propertyAddress: chance.address(),
        propertyCity: chance.city(),
        propertyState:
          chance.integer({ min: 0, max: 100 }) > 70
            ? chance.state({ full: true })
            : 'New York',
        managementOrCobrokeCompany: chance.company(),
        rentOrSalePrice: '$' + Number(rentOrSalePrice).toLocaleString(),
        totalAmount:
          '$' + round(Number(rentOrSalePrice) + 4250, 2).toLocaleString(),
        status: chance.bool() === true ? 'Pending' : 'Approved',
        view: { type: 'action', onClick: () => {} },
      });
    }
    return rows;
  };

  render() {
    const { tableIsLoading, rows } = this.state;
    const { classes, small, ...rest } = this.props;
    return (
      <div className={classes.root}>
        {tableIsLoading ? (
          <div
            className={classes.progressWrapper}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'calc(100vh - 180px)',
            }}
          >
            <Loader color="#f44336" loading />
          </div>
        ) : null}
        <AdminAreaInvoicesTable
          {...rest}
          small={small}
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

export default withStyles(styles)(InvoicesTableContainer);
