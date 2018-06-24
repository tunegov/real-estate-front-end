import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { BounceLoader } from 'react-spinners';
import SubmitDealForm from '../components/forms/SubmitDealForm';

const Loader = BounceLoader;

export const agentQuery = gql`
  query agent($uuid: String!) {
    agent(uuid: $uuid) {
      firstName
      lastName
      role
      agent {
        agentType
        state
      }
    }
  }
`;

export const agentsQuery = gql`
  query agents {
    agents {
      firstName
      lastName
      uuid
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
      agencyDisclosureForm: null,
      permanentPaymentSubtractions: 0, // not submitted
      permanentDeductionSubtractions: 0, // not submitted
      choosingMgmtCoBrokeCompany: false,
      newMgmtOrCobrokeCompany: '',
      hasSetNewMgmtOrCobrokeCompany: false,
      addedMgmtCompanies: [],
    };
  }

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
      total: paymentsTotal - this.state.deductionsTotal,
    });
  };

  deductionAmountChangeHandler = (id, value) => {
    value = Number(value);
    const deductionsTotal = this.getTotalDeductionsAmount({
      id,
      value: value || 0,
    });
    this.setState({
      deductionAmountItems: {
        ...this.state.deductionAmountItems,
        [id]: value || 0,
      },
      deductionsTotal,
      total: this.state.paymentsTotal - deductionsTotal,
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

  getTotalDeductionsAmount = newItem => {
    let total = 0;
    const { deductionAmountItems, permanentDeductionSubtractions } = this.state;

    Object.keys(deductionAmountItems)
      .filter(itemID => (newItem ? itemID !== newItem.id : true))
      .forEach(key => {
        total += deductionAmountItems[key];
      });

    if (newItem && newItem.value) total += newItem.value;

    return total - permanentDeductionSubtractions;
  };

  subtractPaymentValueFromState = payment => {
    const paymentsTotal = this.getTotalPaymentsAmount() - payment;

    this.setState({
      permanentPaymentSubtractions:
        this.state.permanentPaymentSubtractions + payment,
      paymentsTotal,
      total: paymentsTotal - this.state.deductionsTotal,
    });
  };

  subtractDeductionValueFromState = deduction => {
    const deductionsTotal = this.getTotalDeductionsAmount() - deduction;

    this.setState({
      permanentDeductionSubtractions:
        this.state.permanentDeductionSubtractions + deduction,
      deductionsTotal,
      total: this.state.paymentsTotal - deductionsTotal,
    });
  };

  setAgencyDisclosureForm = file => {
    this.setState({ agencyDisclosureForm: file });
  };

  setContractOrLeaseForms = filesObject => {
    const fileArray = Object.keys(filesObject).map(key => filesObject[key]);
    this.setState({ contractOrLeaseForms: fileArray });
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
    const { addedMgmtCompanies, newMgmtOrCobrokeCompany } = this.state;
    this.setState({
      choosingMgmtCoBrokeCompany: false,
      hasSetNewMgmtOrCobrokeCompany: true,
      newMgmtOrCobrokeCompany: '',
      addedMgmtCompanies: [
        ...addedMgmtCompanies,
        newMgmtOrCobrokeCompany.trim(),
      ],
    });
  };

  onSubmit = values => {
    console.log('returnObject');
    let returnObject;
    const {
      contractOrLeaseForms,
      agencyDisclosureForm,
      addedMgmtCompanies,
      hasSetNewMgmtOrCobrokeCompany,
      paymentsTotal,
      deductionsTotal,
      total,
    } = this.state;

    if (hasSetNewMgmtOrCobrokeCompany) {
      returnObject = {
        ...values,
        agencyDisclosureForm,
        contractOrLeaseForms,
        addedMgmtCompanies,
        paymentsTotal,
        deductionsTotal,
        total,
      };
    } else {
      returnObject = {
        ...values,
        agencyDisclosureForm,
        contractOrLeaseForms,
        paymentsTotal,
        deductionsTotal,
        total,
      };
    }

    console.log(returnObject);
  };

  onSubmitFailure = (errs, onSubmitError) => {
    console.log(errs);
    console.log(onSubmitError);
  };

  render() {
    const { userUUID: uuid, ...rest } = this.props;
    const { agencyDisclosureForm, contractOrLeaseForms } = this.state;

    return (
      <Query query={agentQuery} variables={{ uuid }}>
        {({ loading: loadingOne, error: errorOne, data: { agent } }) => (
          <Query query={agentsQuery}>
            {({ loading: loadingTwo, error: errorTwo, data: { agents } }) => {
              console.log(agent);
              console.log(agents);
              if (loadingOne || loadingTwo)
                return (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Loader color="#f44336" loading />
                  </div>
                );
              // TODO: change the error message to a generic
              // 'error connecting to server' message
              if (errorOne || errorTwo) return `Error!: ${error}`;

              return (
                <SubmitDealForm
                  paymentsTotal={`${this.state.paymentsTotal}`}
                  deductionsTotal={`${this.state.deductionsTotal}`}
                  total={this.state.total}
                  agent={agent}
                  agents={agents}
                  onSubmit={this.onSubmit}
                  setAgencyDisclosureForm={this.setAgencyDisclosureForm}
                  setContractOrLeaseForms={this.setContractOrLeaseForms}
                  agencyDisclosureForm={agencyDisclosureForm}
                  contractOrLeaseForms={contractOrLeaseForms}
                  paymentAmountChangeHandler={this.paymentAmountChangeHandler}
                  addedMgmtCompanies={this.state.addedMgmtCompanies}
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
                  choosingMgmtCoBrokeCompany={
                    this.state.choosingMgmtCoBrokeCompany
                  }
                  deductionAmountChangeHandler={
                    this.deductionAmountChangeHandler
                  }
                  subtractPaymentValueFromState={
                    this.subtractPaymentValueFromState
                  }
                  subtractDeductionValueFromState={
                    this.subtractDeductionValueFromState
                  }
                  {...rest}
                />
              );
            }}
          </Query>
        )}
      </Query>
    );
  }
}

export default SubmitDealFormContainer;
