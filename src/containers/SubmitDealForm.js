import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SubmitDealForm from '../components/forms/SubmitDealForm';

export const userQuery = gql`
  query user($uuid: String!) {
    user(uuid: $uuid) {
      firstName
      lastName
      roles
    }
  }
`;

@observer
class SubmitDealFormContainer extends Component {
  render() {
    const { userUUID: uuid } = this.props;

    return (
      <Query query={userQuery} variables={{ uuid }}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;

          return (
            <SubmitDealForm user={data.user} />
          );
        }}
      </Query>
    );
  }
}

export default SubmitDealFormContainer;
