import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import { DotLoader } from 'react-spinners';
import Chance from 'chance';
import isBrowser from 'is-browser';
import moment from 'moment';
import AdminAreaInvoicesTable from '../components/AdminAreaInvoicesTable';
import { capitalize } from '../utils/stringUtils';
import { round } from '../utils/Math';
import debounce from '../utils/debounce';

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
    };
  }

  createRows = () => {
    return this.props.invoices.map(invoice => {
      const {
        invoiceID,
        date,
        invoiceType,
        clientName,
        agentType,
        agentName,
        clientPhoneNumber,
        propertyAddress,
        city,
        state,
        managementOrCobrokeCompany,
        price,
        total,
        status,
      } = invoice;

      return {
        invoiceID,
        date: moment(date).format('MM/DD/YYYY'),
        dealType: invoiceType,
        clientName,
        clientPhoneNumber,
        agentType,
        agentName,
        propertyAddress,
        propertyCity: city,
        propertyState: state,
        managementOrCobrokeCompany,
        rentOrSalePrice: `$${Number(price).toLocaleString()}`,
        status: capitalize(status),
        totalAmount: `$${Number(total).toLocaleString()}`,
        view: {
          type: 'action',
          onClick: () =>
            debounce(
              this.props.openInvoicesViewDialogBox.bind(
                null,
                invoiceID,
                status
              ),
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
        <AdminAreaInvoicesTable
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

export default withStyles(styles)(InvoicesTableContainer);
