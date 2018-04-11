import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import { Form, FormField } from 'react-form';
import moment from 'moment';
import * as emailValidator from 'email-validator';
import uuid from 'uuid/v4';
import Grid from 'material-ui/Grid';
import MaterialCustomTextFieldWrapper from '../../MaterialCustomTextFieldWrapper';
import { capitalize } from '../../../utils/stringUtils';

const CustomTextField = FormField(MaterialCustomTextFieldWrapper);

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 3,
    backgroundColor: '#fff',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '5px',
    boxShadow: theme.shadows[3],
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  alignCenter: {
    textAlign: 'center',
  },
  formHeader: {
    width: '100%',
    marginBottom: theme.spacing.unit * 3,
  },
});

@observer
class SubmitDealForm extends Component {
  render() {
    const { firstName, lastName } = this.props.user;
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.formHeader}>
          <Typography variant="subheading" gutterBottom>Add Deal</Typography>
          <Divider />
        </div>
        <Form
          dontValidateOnMount
          preValidate={this.preValidate}
          onSubmit={this.props.onSubmit}
          onSubmitFailure={this.props.onSubmitFailure}
          validateError={this.errorValidator}
        >
          {formApi => (
            <form onSubmit={formApi.submitForm} id="form1">
              <CustomTextField
                field="date"
                id={uuid()}
                label="Date"
                disabled
                value={`${moment().format('MMMM Do YYYY')}`}
              />
              <CustomTextField
                field="agent"
                id={uuid()}
                label="Agent"
                disabled
                value={`${capitalize(firstName)} ${capitalize(lastName)}`}
              />
              <CustomTextField
                field="leadSource"
                id={uuid()}
                label="Lead Source"
              />
              <CustomTextField
                field="propertyAddress"
                id={uuid()}
                label="Property Address"
                required
              />
              <CustomTextField
                field="apartmentNumber"
                id={uuid()}
                label="Apartment Number"
                required
              />
              <CustomTextField
                field="price"
                id={uuid()}
                label="Rent or Sale Price"
                required
              />
              <Divider />
              <CustomTextField
                field="checkOrTransactionNumber"
                id={uuid()}
                label="Check/Transaction#"
                required
              />
              <CustomTextField
                field="amount"
                id={uuid()}
                label="amount"
                required
              />
              <CustomTextField
                field="subtotal"
                id={uuid()}
                label="subtotal"
                disabled
              />
            </form>
          )}
        </Form>
      </div>
    );
  }
}

export default withStyles(styles)(SubmitDealForm);
