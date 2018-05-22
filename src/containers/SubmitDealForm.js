import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { BounceLoader } from 'react-spinners';
import SubmitDealForm from '../components/forms/SubmitDealForm';

const Loader = BounceLoader;

export const userQuery = gql`
  query user($uuid: String!) {
    user(uuid: $uuid) {
      firstName
      lastName
      roles
      agent
    }
  }
`;

@observer
class SubmitDealFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentAmountItems: {},
      deductionAmountItems: {},
      paymentsTotal: 0,
      deductionsTotal: 0,
      total: 0,
      contractOrLeaseForms: [],
      agentDisclosureForm: null,
    };
  }

  totalPayments = 0;
  totalDeductions = 0;

  paymentAmountChangeHandler = (id, value) => {
    value = Number(value);
    const paymentsTotal = this.getTotalPaymentsAmount({ id, value: value || 0 });
    this.setState({
      paymentAmountItems: { ...this.state.paymentAmountItems, [id]: value || 0 },
      paymentsTotal,
      total: paymentsTotal - this.state.deductionsTotal,
    });
  }

  deductionAmountChangeHandler = (id, value) => {
    value = Number(value);
    const deductionsTotal = this.getTotalDeductionsAmount({ id, value: value || 0 });
    this.setState({
      deductionAmountItems: { ...this.state.deductionsItems, [id]: value || 0 },
      deductionsTotal,
      total: this.state.paymentsTotal - deductionsTotal,
    });
  }

  getTotalPaymentsAmount = newItem => {
    let total = 0;
    const { paymentAmountItems } = this.state;
    Object.keys(paymentAmountItems)
      .filter(itemID => newItem ? itemID !== newItem.id : true)
      .forEach(key => {
        total += paymentAmountItems[key].value;
      });

    if (newItem) total += newItem.value;

    return total;
  }

  getTotalDeductionsAmount = newItem => {
    let total = 0;
    const { deductionAmountItems } = this.state;
    Object.keys(deductionAmountItems)
      .filter(itemID => newItem ? itemID !== newItem.id : true)
      .forEach(key => {
        total += deductionAmountItems[key].value;
      });

    if (newItem) total += newItem.value;

    return total;
  }

  setAgentDisclosureForm = file => {
    this.setState({ agentDisclosureForm: file });
  };

  setContractOrLeaseForms = filesObject => {
    const fileArray = Object.keys(filesObject).map(key => filesObject[key]);
    this.setState({ contractOrLeaseForms: fileArray });
  };

  onSubmit(values) {
    const { contractOrLeaseForms, agentDisclosureForm } = this.state;
    console.log(values);
    console.log(agentDisclosureForm);
    console.log(contractOrLeaseForms);
  }

  render() {
    const { userUUID: uuid, ...rest } = this.props;
    const { agentDisclosureForm, contractOrLeaseForms } = this.state;

    return (
      <Query query={userQuery} variables={{ uuid }}>
        {({ loading, error, data }) => {
          console.log(data)
          if (loading) return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Loader
                color="#f44336"
                loading
              />
            </div>
          );
          // TODO: change the error message to a generic
          // 'error connecting to server' message
          if (error) return `Error!: ${error}`;

          return (
            <SubmitDealForm
              paymentsTotal={`${this.state.paymentsTotal}`}
              deductionsTotal={`${this.state.deductionsTotal}`}
              total={this.state.total}
              user={data.user}
              onSubmit={this.onSubmit}
              setAgentDisclosureForm={this.setAgentDisclosureForm}
              setContractOrLeaseForms={this.setContractOrLeaseForms}
              agentDisclosureForm={agentDisclosureForm}
              contractOrLeaseForms={contractOrLeaseForms}
              paymentAmountChangeHandler={this.paymentAmountChangeHandler}
              deductionAmountChangeHandler={this.deductionAmountChangeHandler}
              {...rest}
            />
          );
        }}
      </Query>
    );
  }
}

export default SubmitDealFormContainer;
