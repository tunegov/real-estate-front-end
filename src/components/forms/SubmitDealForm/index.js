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
import MaterialCustomRadioInputWrapper from '../../MaterialCustomRadioInputWrapper';
import MaterialCustomSelectInputWrapper from '../../MaterialCustomSelectInputWrapper';
import { capitalize } from '../../../utils/stringUtils';

const CustomTextField = FormField(MaterialCustomTextFieldWrapper);
const MaterialCustomRadioInput = FormField(MaterialCustomRadioInputWrapper);
const MaterialCustomSelectInput = FormField(MaterialCustomSelectInputWrapper);

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 3,
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: theme.shadows[3],
  },
  formControlWrapper: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  formControl: {
    marginLeft: 0,
    marginRight: 0,
  },
  alignCenter: {
    textAlign: 'center',
  },
  formHeader: {
    marginBottom: theme.spacing.unit * 3,
  },
  formWrapper: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    textAlign: 'center',
  },
  formRoot: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  radioInputWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  formSubheading: {
    width: '100%',
    textAlign: 'center',
    paddingLeft: '16px',
    paddingTop: '82px',
  },
  h3: {
    fontWeight: theme.typography.fontWeightMedium,
  },
});

const radioInputItems = [
  { label: '80%' },
  { label: '90%' },
];

const selectInputItems = [
  { label: 'Residential Lease' },
  { label: 'Commercial Lease' },
];

@observer
class SubmitDealForm extends Component {
  render() {
    const { firstName, lastName } = this.props.user;
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.formWrapper}>
          <Form
            dontValidateOnMount
            preValidate={this.preValidate}
            onSubmit={this.props.onSubmit}
            onSubmitFailure={this.props.onSubmitFailure}
            validateError={this.errorValidator}
          >
            {formApi => (
              <form onSubmit={formApi.submitForm} id="form1" classes={classes.formRoot}>
                <Grid container spacing={24}>
                  <Grid sm={6} xs={12}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="date"
                        id={uuid()}
                        label="Date"
                        disabled
                        value={`${moment().format('MMMM Do YYYY')}`}
                        fullWidth
                      />
                    </div>
                  </Grid>
                  <Grid sm={6} xs={12}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="agent"
                        id={uuid()}
                        label="Agent"
                        disabled
                        value={`${capitalize(firstName)} ${capitalize(lastName)}`}
                        fullWidth
                      />
                    </div>
                  </Grid>


                  <div className={`${classes.formControlWrapper} ${classes.radioInputWrapper}`}>
                    <MaterialCustomRadioInput
                      field="agentType"
                      id={uuid()}
                      required
                      label="Agent Type"
                      radioInputItems={radioInputItems}
                      horizontal
                    />
                  </div>


                  <Grid xs={12}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="leadSource"
                        id={uuid()}
                        label="Lead Source"
                        fullWidth
                      />
                    </div>
                  </Grid>

                  <div className={classes.formSubheading}>
                    <Typography variant="subheading" classes={{ subheading: classes.h3 }}>Property Information</Typography>
                  </div>

                  <Grid sm={6} xs={12}>
                    <div className={classes.formControlWrapper}>
                      <MaterialCustomSelectInput
                        field="dealType"
                        id={uuid()}
                        required
                        fullWidth
                        label="Deal Type"
                        name="dealType"
                        selectInputItems={selectInputItems}
                      />
                    </div>
                  </Grid>

                  <Grid sm={6} xs={12}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="propertyAddress"
                        id={uuid()}
                        label="Property Address"
                        required
                        fullWidth
                      />
                    </div>
                  </Grid>
                  <Grid sm={6} xs={12}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="city"
                        id={uuid()}
                        label="City"
                        required
                        fullWidth
                      />
                    </div>
                  </Grid>
                  <Grid sm={6} xs={12}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="apartmentNumber"
                        id={uuid()}
                        label="Apartment Number"
                        required
                        fullWidth
                      />
                    </div>
                  </Grid>
                  <CustomTextField
                    field="price"
                    id={uuid()}
                    label="Rent or Sale Price"
                    required
                  />
                  <br />
                  <Divider />
                  <br />
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
                </Grid>
              </form>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SubmitDealForm);
