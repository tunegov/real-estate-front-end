import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { BounceLoader } from 'react-spinners';
import SubmitInvoiceForm from '../components/forms/SubmitInvoiceForm';

const Loader = BounceLoader;

export const agentQuery = gql`
  query agent($uuid: String!) {
    agent(uuid: $uuid) {
      firstName
      lastName
      role
    }
  }
`;

@observer
class SubmitInvoiceFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentAmountItems: {},
      paymentsTotal: 0,
      total: 0,
      contractOrLeaseForms: [],
      agentDisclosureForm: null,
      permanentPaymentSubtractions: 0,
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
      paymentsTotal,
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
      paymentsTotal,
      total: paymentsTotal,
    });
  };

  setAgentDisclosureForm = file => {
    this.setState({ agentDisclosureForm: file });
  };

  setContractOrLeaseForms = filesObject => {
    const fileArray = Object.keys(filesObject).map(key => filesObject[key]);
    this.setState({ contractOrLeaseForms: fileArray });
  };

  onSubmit = values => {
    const { contractOrLeaseForms, agentDisclosureForm } = this.state;
    console.log(values);
    console.log(agentDisclosureForm);
    console.log(contractOrLeaseForms);
  };

  render() {
    const { userUUID: uuid, ...rest } = this.props;
    const { agentDisclosureForm, contractOrLeaseForms } = this.state;

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
              paymentsTotal={`${this.state.paymentsTotal}`}
              deductionsTotal={`${this.state.deductionsTotal}`}
              total={this.state.total}
              agent={data.agent}
              onSubmit={this.onSubmit}
              setAgentDisclosureForm={this.setAgentDisclosureForm}
              setContractOrLeaseForms={this.setContractOrLeaseForms}
              agentDisclosureForm={agentDisclosureForm}
              contractOrLeaseForms={contractOrLeaseForms}
              paymentAmountChangeHandler={this.paymentAmountChangeHandler}
              deductionAmountChangeHandler={this.deductionAmountChangeHandler}
              subtractPaymentValueFromState={this.subtractPaymentValueFromState}
              {...rest}
            />
          );
        }}
      </Query>
    );
  }
}

export default SubmitInvoiceFormContainer;
