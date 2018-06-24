import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import { Form, NestedField } from 'react-form';
import moment from 'moment';
import uuid from 'uuid/v4';
import Grid from 'material-ui/Grid';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import MaterialCustomTextFieldWrapper from '../../MaterialCustomTextFieldWrapper';
import MaterialCustomRadioInputWrapper from '../../MaterialCustomRadioInputWrapper';
import MaterialCustomSelectInputWrapper from '../../MaterialCustomSelectInputWrapper';
import CustomFileUploadInputWrapper from '../../CustomFileUploadInputWrapper';
import { capitalize } from '../../../utils/stringUtils';
import validators, {
  paymentTypeValidator,
  checkOrTransactionNumberValidator,
  paymentAmountValidator,
  deductionTypeValidator,
  descriptionValidator,
  deductionsAmountValidator,
} from './formValidation';

const CustomTextField = MaterialCustomTextFieldWrapper;
const MaterialCustomRadioInput = MaterialCustomRadioInputWrapper;
const MaterialCustomSelectInput = MaterialCustomSelectInputWrapper;
const CustomFileUploadInputBtn = CustomFileUploadInputWrapper;

const acceptedFileExtensions = ['jpg', 'jpeg', 'pdf'];

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
    overflow: 'hidden',
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
    marginLeft: '28px',
  },
  paymentItemsWrapper: {
    display: 'flex',
    width: '100%',
    padding: '5px 0 12px 0',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    '& > div': {
      paddingLeft: '12px',
      paddingRight: '12px',
    },
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
    boxShadow:
      '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    padding: '8px 16px',
    minWidth: '88px',
    fontSize: '0.875rem',
    boxSizing: 'border-box',
    minHeight: '36px',
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    lineHeight: '1.4em',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '500',
    borderRadius: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#000',
    },
    addUploadBtnClassName: {},
  },
  fileUploadBtnWrapper2: {
    display: 'inline-block',
  },
  smallFileAddBtn: {
    width: '40px',
    height: '40px',
    minWidth: '40px',
    minHeight: '40px',
    backgroundColor: '#2995F3',
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      backgroundColor: '#2483D6',
    },
  },
  smallFileRemoveBtn: {
    width: '40px',
    height: '40px',
    minWidth: '40px',
    minHeight: '40px',
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
    paddingLeft: '10px',
  },
  alignCenterGrid: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

const radioInputAgentItems = [{ label: '80%' }, { label: '90%' }];

const radioInputAgentPaymentItems = [
  { label: 'Ill pick up the check' },
  { label: 'Please ACH me' },
];

const radioInputYesNoItems = [{ label: 'Yes' }, { label: 'No' }];

const dealTypeSelectItems = [
  { label: 'Residential Rental' },
  { label: 'Residential Sale' },
  { label: 'Commercial Rental' },
  { label: 'Commercial Sale' },
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
  { label: 'Money Order' },
  { label: 'Wire' },
  { label: 'Owner Pays (OP)' },
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
  { label: 'Private Landlord' },
  { label: 'Disney Land' },
  { label: 'Gucci' },
  { label: 'Alexander the Great' },
  { label: 'Apple' },
  { label: 'Amazon' },
];

@observer
class SubmitInvoiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRenderInitialDeductionItem: true,
    };
  }
  isFirstTimeRender = true;

  render() {
    const { firstName, lastName } = this.props.agent;
    const {
      classes,
      setAgentDisclosureForm,
      setContractOrLeaseForms,
      agentDisclosureForm,
      contractOrLeaseForms,
      subtractPaymentValueFromState,
    } = this.props;

    const agentSelectItems = [
      { label: `${capitalize(firstName)} ${capitalize(lastName)}` },
      { label: 'You' },
      { label: 'Me' },
      { label: 'Them' },
    ];

    return (
      <div>
        <div className={classes.formWrapper}>
          <Form
            preValidate={this.preValidate}
            onSubmit={this.props.onSubmit}
            onSubmitFailure={this.props.onSubmitFailure}
            validate={validators}
            getApi={formApi => {
              this.props.getFormApi(formApi);
            }}
          >
            {formApi => {
              if (this.isFirstTimeRender) {
                this.isFirstTimeRender = false;
                // formApi.addValue('contractOrLeaseItems');
                formApi.setValue('date', `${moment().format('MMMM Do YYYY')}`);
                formApi.setValue('agent', [
                  `${capitalize(firstName)} ${capitalize(lastName)}`,
                ]);
                formApi.setValue('paymentsSubtotal', this.props.paymentsTotal);
                formApi.setValue(
                  'deductionsSubtotal',
                  this.props.deductionsTotal
                );
              }

              return (
                <form
                  onSubmit={formApi.submitForm}
                  id="form1"
                  classes={classes.formRoot}
                >
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
                          required
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
                          value={`${capitalize(firstName)} ${capitalize(
                            lastName
                          )}`}
                          fullWidth
                          required
                        />
                      </div>
                    </Grid>

                    <div className={classes.formSubheading}>
                      <Typography
                        variant="subheading"
                        classes={{ subheading: classes.h3 }}
                      >
                        Property Information
                      </Typography>
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
                          field="state"
                          id={uuid()}
                          label="State"
                          required
                          fullWidth
                          disabled
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
                    <Grid item xs={12}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="price"
                          id={uuid()}
                          label="Rent or Sale Price"
                          required
                          fullWidth
                          noLetters
                          isDollarAmount
                        />
                      </div>
                    </Grid>

                    <div className={classes.formSubheading}>
                      <Typography
                        variant="subheading"
                        classes={{ subheading: classes.h3 }}
                      >
                        {"Client's"} Information
                      </Typography>
                    </div>

                    <Grid item xs={12} sm={6}>
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

                    <Grid item xs={12} sm={6}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="clientPhoneNumber"
                          id={uuid()}
                          label="Client's Phone Number"
                          required
                          fullWidth
                        />
                      </div>
                    </Grid>

                    <div
                      className={`${classes.formSubheading} ${
                        classes.paddingBottom10
                      }`}
                    >
                      <Typography
                        variant="subheading"
                        classes={{ subheading: classes.h3 }}
                      >
                        Transaction Financials
                      </Typography>
                    </div>

                    <div className={classes.formMiniHeading}>
                      <Typography
                        variant="subheading"
                        classes={{
                          subheading: classes.h4,
                          root: classes.greenText,
                        }}
                      >
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
                            validate={paymentTypeValidator}
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
                            validate={checkOrTransactionNumberValidator}
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
                            validate={paymentAmountValidator}
                            noLetters
                            noNegativeSign
                            onChangeWithID={
                              this.props.paymentAmountChangeHandler
                            }
                            isDollarAmount
                          />
                        </div>
                      </Grid>
                    </NestedField>

                    {formApi.values.paymentItems &&
                      formApi.values.paymentItems
                        .map((paymentItems, i) => (
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
                                    validate={paymentTypeValidator}
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
                                    validate={checkOrTransactionNumberValidator}
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
                                    validate={paymentAmountValidator}
                                    noLetters
                                    noNegativeSign
                                    onChangeWithID={
                                      this.props.paymentAmountChangeHandler
                                    }
                                    isDollarAmount
                                  />
                                </div>
                              </Grid>
                            </NestedField>
                            <Button
                              classes={{ root: classes.removePaymentBtn }}
                              variant="raised"
                              color="secondary"
                              onClick={() => {
                                const amount = Number(
                                  formApi.values.paymentItems[i].amount
                                );

                                if (amount) {
                                  subtractPaymentValueFromState(amount);
                                }

                                formApi.removeValue('paymentItems', i);
                              }}
                              type="button"
                            >
                              Remove
                            </Button>
                          </div>
                        ))
                        .slice(1)}
                    <Grid item xs={12}>
                      <Button
                        classes={{ root: classes.addPaymentBtn }}
                        variant="raised"
                        color="primary"
                        onClick={() => formApi.addValue('paymentItems')}
                        type="button"
                      >
                        Add invoice item
                      </Button>
                    </Grid>

                    <Grid item xs={12}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="financialsTotal"
                          id={uuid()}
                          label="Total"
                          disabled
                          fullWidth
                          labelClassName={classes.finalTotalLabelClass}
                          submittedValue={`${this.props.total}`}
                          formApi={formApi}
                          convertToLocaleString
                          isDollarAmount
                          inputRootClassName={classes.finalTotalInputClass}
                        />
                      </div>
                    </Grid>

                    <div
                      className={`${classes.formSubheading} ${
                        classes.paddingBottom10
                      }`}
                    >
                      <Typography
                        variant="subheading"
                        classes={{ subheading: classes.h3 }}
                      >
                        Send To
                      </Typography>
                    </div>

                    <Grid item xs={12}>
                      <Divider />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="attention"
                          id={uuid()}
                          label="Attention"
                          required
                          fullWidth
                        />
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="attentionEmail"
                          id={uuid()}
                          label="Email"
                          required
                          fullWidth
                        />
                      </div>
                    </Grid>

                    <div className={classes.formMiniHeading2}>
                      <Typography
                        variant="subheading"
                        classes={{ subheading: classes.h4 }}
                      >
                        Other:
                      </Typography>
                    </div>

                    <Grid item xs={12}>
                      <Divider />
                    </Grid>

                    <Grid item xs={12}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="notes"
                          id={uuid()}
                          label="Notes"
                          fullWidth
                          multiline
                          placeholder="Leave any notes here..."
                        />
                      </div>
                    </Grid>
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

export default withStyles(styles)(SubmitInvoiceForm);
