import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import { DotLoader } from 'react-spinners';
import Chance from 'chance';
import isBrowser from 'is-browser';
import moment from 'moment';
import AdminAreaDealsTable from '../components/AdminAreaDealsTable';
import debounce from '../utils/debounce';
import { capitalize } from '../utils/stringUtils';

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
  { name: 'dealID', title: 'Deal ID' },
  { name: 'date', title: 'Date' },
  { name: 'agentName', title: 'Agent Name' },
  { name: 'agentType', title: 'Agent Type' },
  { name: 'dealType', title: 'Deal Type' },
  { name: 'clientName', title: 'Client Name' },
  { name: 'clientEmail', title: 'Client Email' },
  { name: 'propertyAddress', title: 'Property Address' },
  { name: 'propertyCity', title: 'Property City' },
  { name: 'propertyState', title: 'Property State' },
  { name: 'managementOrCobrokeCompany', title: 'Mgmt/Co-Broke Co.' },
  { name: 'rentOrSalePrice', title: 'Rent/Sale Price' },
  { name: 'deductionsTotal', title: 'Deductions Total' },
  { name: 'paymentsTotal', title: 'Payments Total' },
  { name: 'netPaymentsTotal', title: 'Net Payments Total' },
  { name: 'status', title: 'Status' },
  { name: 'view', title: 'View' },
];

@observer
class DealsTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableIsLoading: true,
    };
  }

  createRows = () => {
    return this.props.deals.map(deal => {
      const {
        dealID,
        date,
        agentName,
        agentType,
        leadSource,
        dealType,
        propertyAddress,
        state,
        city,
        apartmentNumber,
        managementOrCobrokeCompany,
        price,
        clientName,
        clientEmail,
        paymentsTotal,
        deductionsTotal,
        total,
        agentNotes,
        status,
      } = deal;

      return {
        dealID,
        date: moment(date).format('MM/DD/YYYY'),
        agentName,
        agentType,
        dealType,
        clientName,
        clientEmail,
        propertyAddress,
        propertyCity: city,
        propertyState: state,
        managementOrCobrokeCompany,
        rentOrSalePrice: `$${Number(price).toLocaleString()}`,
        deductionsTotal: `$${Number(deductionsTotal).toLocaleString()}`,
        paymentsTotal: `$${Number(paymentsTotal).toLocaleString()}`,
        netPaymentsTotal: `$${Number(total).toLocaleString()}`,
        status: capitalize(status),
        view: {
          type: 'action',
          onClick: () =>
            debounce(
              this.props.openDealsViewDialogBox.bind(null, dealID, status),
              1000,
              true
            )(),
        },
      };
    });
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
        <AdminAreaDealsTable
          {...rest}
          small={small}
          onMount={() =>
            tableIsLoading ? this.setState({ tableIsLoading: false }) : null
          }
          columns={columns}
          rows={this.createRows()}
        />
      </div>
    );
  }
}

export default withStyles(styles)(DealsTableContainer);
