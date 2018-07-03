import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { BounceLoader } from 'react-spinners';
import SubmitInvoiceForm from '../components/forms/SubmitInvoiceForm';
import submitInvoice from '../effects/invoices/submitInvoice';
import { capitalize } from '../utils/stringUtils';

const Loader = BounceLoader;

const agentQuery = gql`
  query agent($uuid: String!) {
    agent(uuid: $uuid) {
      firstName
      lastName
      role
      agent {
        state
        agentType
      }
    }
  }
`;

@observer
class SubmitInvoiceFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentAmountItems: {},
      total: 0,
      permanentPaymentSubtractions: 0,
      choosingMgmtCoBrokeCompany: false,
      newMgmtOrCobrokeCompany: '',
      hasSetNewMgmtOrCobrokeCompany: false,
      addedManagementCompanies: [],
      formSubmissionBegun: false,
      submittingFormToServer: false,
    };
  }

  totalPayments = 0;

  paymentAmountChangeHandler = (id, value) => {
    value = Number(value);
    const paymentsTotal = this.getTotalPaymentsAmount({
      id,
      value: value || 0,
    });
    this.setState({
      paymentAmountItems: {
        ...this.state.paymentAmountItems,
        [id]: value || 0,
      },
      total: paymentsTotal,
    });
  };

  getTotalPaymentsAmount = newItem => {
    let total = 0;
    const { paymentAmountItems, permanentPaymentSubtractions } = this.state;

    Object.keys(paymentAmountItems)
      .filter(itemID => (newItem ? itemID !== newItem.id : true))
      .forEach(key => {
        total += paymentAmountItems[key];
      });

    if (newItem && newItem.value) total += newItem.value;

    return total - permanentPaymentSubtractions;
  };

  subtractPaymentValueFromState = payment => {
    const paymentsTotal = this.getTotalPaymentsAmount() - payment;

    this.setState({
      permanentPaymentSubtractions:
        this.state.permanentPaymentSubtractions + payment,
      total: paymentsTotal,
    });
  };

  handleMgmtOrCobrokeCompanyChange = event => {
    this.setState({
      newMgmtOrCobrokeCompany: event.target.value,
    });
  };

  toggleChoosingMgmtCoBrokeCompany = bool => {
    const { choosingMgmtCoBrokeCompany } = this.state;
    this.setState({
      choosingMgmtCoBrokeCompany:
        typeof bool === 'boolean' ? bool : !choosingMgmtCoBrokeCompany,
      newMgmtOrCobrokeCompany: '',
    });
  };

  setHasSetNewMgmtOrCobrokeCompany = bool => {
    const { addedManagementCompanies, newMgmtOrCobrokeCompany } = this.state;
    this.setState({
      choosingMgmtCoBrokeCompany: false,
      hasSetNewMgmtOrCobrokeCompany: true,
      newMgmtOrCobrokeCompany: '',
      addedManagementCompanies: [
        ...addedManagementCompanies,
        capitalize(newMgmtOrCobrokeCompany.trim()),
      ],
    });
  };

  onSubmit = values => {
    this.props.setFormSubmitted();

    const { addedManagementCompanies, total } = this.state;

    const returnObject = {
      ...values,
      addedManagementCompanies,
      total,
    };

    delete returnObject.date;
    delete returnObject.agent;
    delete returnObject.agentType;
    delete returnObject.state;
    delete returnObject.financialsTotal;

    returnObject.price = Number(returnObject.price);
    returnObject.paymentItems = returnObject.paymentItems.map(item => ({
      ...item,
      amount: Number(item.amount),
    }));

    this.setState({
      formSubmissionBegun: true,
      submittingFormToServer: true,
    });

    submitInvoice(returnObject)
      .then(res => {
        let failed = false;

        if (res.otherError) {
          console.log(res.otherError);
          failed = true;
        }

        if (res.userErrors.length) {
          res.userErrors.forEach(error => console.log(error));
          failed = true;
        }

        if (!failed) {
          this.props.setInvoiceSuccessfullySubmitted(res.invoice);
        }
      })
      .catch(err => {
        console.log(err);
      });

    console.log(returnObject);
  };

  render() {
    const { userUUID: uuid, ...rest } = this.props;

    return (
      <Query query={agentQuery} variables={{ uuid }}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Loader color="#f44336" loading />
              </div>
            );
          // TODO: change the error message to a generic
          // 'error connecting to server' message
          if (error) return `Error!: ${error}`;

          return (
            <SubmitInvoiceForm
              deductionsTotal={`${this.state.deductionsTotal}`}
              total={this.state.total}
              agent={data.agent}
              onSubmit={this.onSubmit}
              paymentAmountChangeHandler={this.paymentAmountChangeHandler}
              subtractPaymentValueFromState={this.subtractPaymentValueFromState}
              addedManagementCompanies={this.state.addedManagementCompanies}
              newMgmtOrCobrokeCompany={this.state.newMgmtOrCobrokeCompany}
              setHasSetNewMgmtOrCobrokeCompany={
                this.setHasSetNewMgmtOrCobrokeCompany
              }
              toggleChoosingMgmtCoBrokeCompany={
                this.toggleChoosingMgmtCoBrokeCompany
              }
              handleMgmtOrCobrokeCompanyChange={
                this.handleMgmtOrCobrokeCompanyChange
              }
              choosingMgmtCoBrokeCompany={this.state.choosingMgmtCoBrokeCompany}
              {...rest}
              formSubmissionBegun={this.state.formSubmissionBegun}
              submittingFormToServer={this.state.submittingFormToServer}
            />
          );
        }}
      </Query>
    );
  }
}

export default SubmitInvoiceFormContainer;
