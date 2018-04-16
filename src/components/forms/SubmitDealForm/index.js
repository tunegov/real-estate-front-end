import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import { Form, NestedField } from 'react-form';
import moment from 'moment';
import * as emailValidator from 'email-validator';
import uuid from 'uuid/v4';
import Grid from 'material-ui/Grid';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from 'material-ui/Tooltip';
import MaterialCustomTextFieldWrapper from '../../MaterialCustomTextFieldWrapper';
import MaterialCustomRadioInputWrapper from '../../MaterialCustomRadioInputWrapper';
import MaterialCustomSelectInputWrapper from '../../MaterialCustomSelectInputWrapper';
import CustomFileUploadInputWrapper from '../../CustomFileUploadInputWrapper';
import { capitalize } from '../../../utils/stringUtils';

let isFirstTimeRender = true;

const CustomTextField = MaterialCustomTextFieldWrapper;
const MaterialCustomRadioInput = MaterialCustomRadioInputWrapper;
const MaterialCustomSelectInput = MaterialCustomSelectInputWrapper;
const CustomFileUploadInputBtn = CustomFileUploadInputWrapper;

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
  addPaymentBtn: {
    marginTop: '10px',
  },
  removePaymentBtn: {
    marginTop: '5px',
    marginLeft: '16px',
  },
  paymentItemsWrapper: {
    display: 'flex',
    width: '100%',
    padding: '12px',
    paddingTop: '5px',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
  },
  formMiniHeading: {
    width: '100%',
    textAlign: 'left',
    paddingLeft: '28px',
  },
  formMiniHeading2: {
    width: '100%',
    textAlign: 'left',
    paddingLeft: '28px',
    marginTop: '60px',
  },
  topPaymentMethodWrapper: {
    paddingTop: '0',
  },
  paddingBottom10: {
    paddingBottom: '15px',
  },
  greenText: {
    color: '#448A19',
  },
  redText: {
    color: '#ED462F',
  },
  blueText: {
    color: '#3878D8',
  },
  financialsTotal: {
    backgroundColor: 'rgba(0,0,0,.12)',
  },
  uploadBtnClassName: {
    color: '#fff',
    backgroundColor: '#272A2E',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    padding: '8px 16px',
    minWidth: '88px',
    fontSize: '0.875rem',
    boxSizing: 'border-box',
    minHeight: '36px',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    lineHeight: '1.4em',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '500',
    borderRadius: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#000',
    },
    addUploadBtnClassName: {

    },
  },
  fileUploadBtnWrapper2: {
    display: 'inline-block',
  },
  smallFileAddBtn: {
    width: '40px',
    height: '40px',
    backgroundColor: '#2995F3',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      backgroundColor: '#2483D6',
    },
  },
  smallFileRemoveBtn: {
    width: '40px',
    height: '40px',
    position: 'absolute',
    top: '18px',
  },
  uploadContractDivWrapper: {
    position: 'relative',
  },
  blueBackgroundColor: {
    backgroundColor: '#2995F3',
  },
  finalTotalLabelClass: {
    paddingLeft: '10px',
  },
  finalTotalInputClass: {
    backgroundColor: 'rgba(0,0,0,.12)',
    borderRadius: '5px 5px 0 0',
  },
});

const radioInputAgentItems = [
  { label: '80%' },
  { label: '90%' },
];

const radioInputAgentPaymentItems = [
  { label: 'Ill pick up the check' },
  { label: 'Please ACH me' },
];

const radioInputYesNoItems = [
  { label: 'Yes' },
  { label: 'No' },
];

const dealTypeSelectItems = [
  { label: 'Residential Lease' },
  { label: 'Commercial Lease' },
];

const fundsPaidBySelectItems = [
  { label: 'Bringing a ckeck to the office' },
  { label: 'Remote deposit to Chase account' },
  { label: 'Check or "OP" mailed to office' },
  { label: 'Cridit card payment' },
  { label: 'Client wired funds' },
  { label: 'Commision advance' },
];

const paymentTypeSelectItems = [
  { label: 'Check' },
  { label: 'Credit Card' },
  { label: 'Cash' },
  { label: 'Owner Pays' },
];

const deductionTypeSelectItems = [
  { label: 'Deal Fee' },
  { label: 'Dues' },
  { label: '3rd Party Check' },
  { label: 'Processing Fee' },
  { label: 'Payment' },
  { label: 'Agent Split' },
  { label: 'Other' },
];

const managementCobrokeCompanySelectItems = [
  { label: 'Buger King' },
  { label: 'Disney Land' },
  { label: 'Gucci' },
  { label: 'Alexander the Great' },
  { label: 'Apple' },
  { label: 'Amazon' },
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
            {formApi => {
              // console.log(formApi.values);
              if (isFirstTimeRender) {
                formApi.addValue('contractOrLeaseItems');
                isFirstTimeRender = false;
              }

              return (
                <form onSubmit={formApi.submitForm} id="form1" classes={classes.formRoot}>
                  <Grid container spacing={24}>
                    <Grid item sm={6} xs={12}>
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
                    <Grid item sm={6} xs={12}>
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
                        radioInputItems={radioInputAgentItems}
                        horizontal
                      />
                    </div>


                    <Grid item xs={12}>
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

                    <Grid item sm={6} xs={12}>
                      <div className={classes.formControlWrapper}>
                        <MaterialCustomSelectInput
                          field="dealType"
                          id={uuid()}
                          required
                          fullWidth
                          label="Deal Type"
                          name="dealType"
                          selectInputItems={dealTypeSelectItems}
                        />
                      </div>
                    </Grid>

                    <Grid item sm={6} xs={12}>
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
                    <Grid item sm={6} xs={12}>
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
                    <Grid item sm={6} xs={12}>
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
                    <Grid item sm={6} xs={12}>
                      <div className={classes.formControlWrapper}>
                        <MaterialCustomSelectInput
                          field="managementOrCobrokeCompany"
                          id={uuid()}
                          required
                          fullWidth
                          label="Management/Co-Broke Company"
                          name="managementOrCobrokeCompany"
                          selectInputItems={managementCobrokeCompanySelectItems}
                        />
                      </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="price"
                          id={uuid()}
                          label="Rent or Sale Price"
                          required
                          fullWidth
                        />
                      </div>
                    </Grid>

                    <div className={classes.formSubheading}>
                      <Typography variant="subheading" classes={{ subheading: classes.h3 }}>{'Client\'s'} Information</Typography>
                    </div>

                    <Grid item sm={6} xs={12}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="clientName"
                          id={uuid()}
                          label="Client's Name"
                          required
                          fullWidth
                        />
                      </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="clientEmail"
                          id={uuid()}
                          label="Client Email"
                          required
                          fullWidth
                        />
                      </div>
                    </Grid>

                    <div className={`${classes.formSubheading} ${classes.paddingBottom10}`}>
                      <Typography variant="subheading" classes={{ subheading: classes.h3 }}>Transaction Financials</Typography>
                    </div>

                    <div className={classes.formMiniHeading}>
                      <Typography variant="subheading" classes={{ subheading: classes.h4, root: classes.greenText }}>
                        Paid:
                      </Typography>
                    </div>

                    <NestedField field={['paymentItems', 0]}>
                      <Grid item sm={4} xs={12}>
                        <div className={classes.formControlWrapper}>
                          <MaterialCustomSelectInput
                            field="paymentType"
                            id={uuid()}
                            required
                            fullWidth
                            label="Payment Type"
                            name="paymentType"
                            selectInputItems={paymentTypeSelectItems}
                          />
                        </div>
                      </Grid>

                      <Grid item sm={4} xs={12}>
                        <div className={classes.formControlWrapper}>
                          <CustomTextField
                            field="checkOrTransactionNumber"
                            id={uuid()}
                            label="Check/Transaction#"
                            required
                            fullWidth
                          />
                        </div>
                      </Grid>

                      <Grid item sm={4} xs={12}>
                        <div className={classes.formControlWrapper}>
                          <CustomTextField
                            field="amount"
                            id={uuid()}
                            label="Amount"
                            required
                            fullWidth
                          />
                        </div>
                      </Grid>
                    </NestedField>

                    {formApi.values.paymentItems && formApi.values.paymentItems.map((paymentItems, i) => (
                      <div className={classes.paymentItemsWrapper} key={i}>
                        <NestedField field={['paymentItems', i]}>
                          <Grid item sm={4} xs={12}>
                            <div className={classes.formControlWrapper}>
                              <MaterialCustomSelectInput
                                field="paymentType"
                                id={uuid()}
                                required
                                fullWidth
                                label="Payment Type"
                                name="paymentType"
                                selectInputItems={paymentTypeSelectItems}
                              />
                            </div>
                          </Grid>

                          <Grid item sm={4} xs={12}>
                            <div className={classes.formControlWrapper}>
                              <CustomTextField
                                field="checkOrTransactionNumber"
                                id={uuid()}
                                label="Check/Transaction#"
                                required
                                fullWidth
                              />
                            </div>
                          </Grid>

                          <Grid item sm={4} xs={12}>
                            <div className={classes.formControlWrapper}>
                              <CustomTextField
                                field="amount"
                                id={uuid()}
                                label="Amount"
                                required
                                fullWidth
                              />
                            </div>
                          </Grid>
                        </NestedField>
                        <Button
                          classes={{ root: classes.removePaymentBtn }}
                          variant="raised"
                          color="secondary"
                          onClick={() => formApi.removeValue('paymentItems', i)}
                          type="button"
                        >
                          Remove
                        </Button>
                      </div>
                    )).slice(1)}
                    <Grid item xs={12}>
                      <Button
                        classes={{ root: classes.addPaymentBtn }}
                        variant="raised"
                        color="primary"
                        onClick={() => formApi.addValue('paymentItems')}
                        type="button"
                      >
                        Add payment item
                      </Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="paymentsSubtotal"
                          id={uuid()}
                          label="Payments Subtotal"
                          disabled
                          fullWidth
                        />
                      </div>
                    </Grid>

                    <div className={classes.formMiniHeading2}>
                      <Typography variant="subheading" classes={{ subheading: classes.h4, root: classes.redText }}>
                        Deductions:
                      </Typography>
                    </div>

                    <NestedField field={['deductionItems', 0]}>
                      <Grid item sm={4} xs={12}>
                        <div className={classes.formControlWrapper}>
                          <MaterialCustomSelectInput
                            field="deductionType"
                            id={uuid()}
                            required
                            fullWidth
                            label="Deduction Type"
                            name="deductionType"
                            selectInputItems={deductionTypeSelectItems}
                          />
                        </div>
                      </Grid>

                      <Grid item sm={4} xs={12}>
                        <div className={classes.formControlWrapper}>
                          <CustomTextField
                            field="description"
                            id={uuid()}
                            label="Description"
                            required
                            fullWidth
                          />
                        </div>
                      </Grid>

                      <Grid item sm={4} xs={12}>
                        <div className={classes.formControlWrapper}>
                          <CustomTextField
                            field="amount"
                            id={uuid()}
                            label="Amount"
                            required
                            fullWidth
                          />
                        </div>
                      </Grid>
                    </NestedField>

                    {formApi.values.deductionItems && formApi.values.deductionItems.map((deductionItems, i) => (
                      <div className={classes.paymentItemsWrapper} key={i}>
                        <NestedField field={['deductionItems', i]}>
                          <Grid item sm={4} xs={12}>
                            <div className={classes.formControlWrapper}>
                              <MaterialCustomSelectInput
                                field="deductionType"
                                id={uuid()}
                                required
                                fullWidth
                                label="Deduction Type"
                                name="deductionType"
                                selectInputItems={deductionTypeSelectItems}
                              />
                            </div>
                          </Grid>

                          <Grid item sm={4} xs={12}>
                            <div className={classes.formControlWrapper}>
                              <CustomTextField
                                field="description"
                                id={uuid()}
                                label="Description"
                                required
                                fullWidth
                              />
                            </div>
                          </Grid>

                          <Grid item sm={4} xs={12}>
                            <div className={classes.formControlWrapper}>
                              <CustomTextField
                                field="amount"
                                id={uuid()}
                                label="Amount"
                                required
                                fullWidth
                              />
                            </div>
                          </Grid>
                        </NestedField>
                        <Button
                          classes={{ root: classes.removePaymentBtn }}
                          variant="raised"
                          color="secondary"
                          onClick={() => formApi.removeValue('deductionItems', i)}
                          type="button"
                        >
                          Remove
                        </Button>
                      </div>
                    )).slice(1)}
                    <Grid item xs={12}>
                      <Button
                        classes={{ root: classes.addPaymentBtn }}
                        variant="raised"
                        color="primary"
                        onClick={() => formApi.addValue('deductionItems')}
                        type="button"
                      >
                        Add deduction item
                      </Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="deductionsSubtotal"
                          id={uuid()}
                          label="Deductions Subtotal"
                          disabled
                          fullWidth
                        />
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="financialsTotal"
                          id={uuid()}
                          label="Final Total"
                          disabled
                          fullWidth
                          labelClassName={classes.finalTotalLabelClass}
                          inputClassName={classes.finalTotalInputClass}
                        />
                      </div>
                    </Grid>

                    <div className={classes.formMiniHeading2}>
                      <Typography variant="subheading" classes={{ subheading: classes.h4 }}>
                        File Uploads:
                      </Typography>
                    </div>

                    <Grid item xs={12}>
                      <Divider />
                    </Grid>

                    <Grid item xs={12}>
                      <div className={classes.fileUploadBtnWrapper}>
                        <CustomFileUploadInputBtn
                          field="agencyDisclosureForm"
                          id={uuid()}
                          label="Upload Agency Disclosure Form*"
                          btnClassName={classes.uploadBtnClassName}
                        />
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <div className={classes.fileUploadBtnWrapper}>
                        <CustomFileUploadInputBtn
                          field={['contractOrLeaseItems', 0]}
                          id={uuid()}
                          value=""
                          label="Upload Contract or Lease"
                          btnClassName={classes.uploadBtnClassName}
                        />
                      </div>
                    </Grid>

                    {formApi.values.contractOrLeaseItems && formApi.values.contractOrLeaseItems.map((contractOrLeaseItem, i) => (
                      <Grid item xs={12} key={i} classes={{ typeItem: classes.uploadContractDivWrapper }}>
                        <div className={classes.fileUploadBtnWrapper2}>
                          <CustomFileUploadInputBtn
                            field={['contractOrLeaseItems', i]}
                            id={uuid()}
                            label="Upload Contract or Lease"
                            btnClassName={classes.uploadBtnClassName}
                          />
                        </div>
                        <Button
                          variant="fab"
                          color="secondary"
                          aria-label="add"
                          size="small"
                          classes={{ root: classes.smallFileRemoveBtn }}
                          onClick={() => formApi.removeValue('contractOrLeaseItems', i)}
                        >
                          <DeleteIcon />
                        </Button>
                      </Grid>
                    )).slice(1)}

                    <Grid item xs={12}>
                      <div className={classes.fileUploadBtnWrapper}>
                        <Button
                          variant="fab"
                          color="primary"
                          id="contractOrLease"
                          aria-label="add"
                          size="small"
                          classes={{ root: classes.smallFileAddBtn }}
                          onClick={() => formApi.addValue('contractOrLeaseItems')}
                        >
                          <AddIcon />
                        </Button>
                      </div>
                    </Grid>

                    <div className={classes.formMiniHeading2}>
                      <Typography variant="subheading" classes={{ subheading: classes.h4 }}>
                        Other:
                      </Typography>
                    </div>

                    <Grid item xs={12}>
                      <Divider />
                    </Grid>

                    <div className={`${classes.formControlWrapper} ${classes.radioInputWrapper}`}>
                      <MaterialCustomRadioInput
                        field="agentPaymentType"
                        id={uuid()}
                        required
                        label="How would you like to get paid?"
                        radioInputItems={radioInputAgentPaymentItems}
                        horizontal
                      />
                    </div>

                    <Grid item xs={12}>
                      <div className={classes.formControlWrapper}>
                        <MaterialCustomSelectInput
                          field="fundsPaidBy"
                          id={uuid()}
                          required
                          fullWidth
                          label="Funds will/have been paid by..."
                          name="fundsPaidBy"
                          selectInputItems={fundsPaidBySelectItems}
                        />
                      </div>
                    </Grid>

                    <div className={`${classes.formControlWrapper} ${classes.radioInputWrapper}`}>
                      <MaterialCustomRadioInput
                        field="alreadyTurnedFundsIn"
                        id={uuid()}
                        required
                        label="Have you already deposited or given the funds to us?"
                        radioInputItems={radioInputYesNoItems}
                        horizontal
                      />
                    </div>

                  </Grid>
                </form>

              );
            }}
          </Form>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SubmitDealForm);
