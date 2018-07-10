import React, { Component } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { BounceLoader } from 'react-spinners';
import CreateAgentForm from '../components/forms/CreateAgentForm';
import { round } from '../utils/Math';
import updateAgent from '../effects/users/updateAgent';

const Loader = BounceLoader;

export const agentQuery = gql`
  query agent($uuid: String!) {
    agent(uuid: $uuid) {
      firstName
      lastName
      email
      role
      agent {
        profilePicURL
        branch
        state
        mobileNumber
        officeNumber
        areaOfFocus
        realEstateLicenseNumber
        agentType
        facebook
        instagram
        twitter
        profileDescription
      }
    }
  }
`;

@observer
class CreateAgentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitedSuccessfully: false,
    };
  }

  onSubmit = (values, e, formApi) => {
    const returnValues = {
      ...values,
      uuid: this.props.viewingAgentUUID,
    };
    console.log(values);

    this.props.setFormSubmitted();

    updateAgent(returnValues).then(result => {
      const { userErrors, otherError, agent } = result;

      let hasErrors = false;

      if (userErrors.length) {
        userErrors.forEach(error => {
          console.log(error);
          if (error.field === 'email') {
            const formElement = document.getElementById('formDialog');
            formApi.setError(error.field, error.message);
            formElement.scrollTop = formElement.scrollHeight;
          }

          hasErrors = true;
        });

        this.props.setFormSubmitted(false);
        return;
      } else if (otherError) {
        console.log(otherError);
        this.props.setFormSubmitted(false);
        return;
      }

      console.log('nasty');

      this.setState({ formSubmitedSuccessfully: true });

      this.props.setFormSubmitted(false);
      this.props.editAgentFormSubmittedSuccessfully(agent);
    });
  };

  onSubmitFailure = (errs, onSubmitError) => {
    console.log(errs);
    console.log(onSubmitError);
    this.props.setFormSubmitted(false);
  };

  render() {
    const { classes, viewingAgentUUID, ...rest } = this.props;
    return (
      <Query
        query={agentQuery}
        variables={{ uuid: viewingAgentUUID }}
        fetchPolicy="cache-and-network"
      >
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

          const submittedInvoice = data.agent;

          return (
            <div style={{ width: '100%' }}>
              <CreateAgentForm
                submittedAgent={data.agent}
                isViewType
                onSubmit={this.onSubmit}
                onSubmitFailure={this.onSubmitFailure}
                formSubmitedSuccessfully={this.state.formSubmitedSuccessfully}
                isEditingAgent={this.props.isEditingAgent}
                currentUserRole={this.props.currentUserRole}
                getFormApi={this.props.getFormApi}
                {...rest}
              />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default CreateAgentContainer;
