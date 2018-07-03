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
import TextField from 'material-ui/TextField';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Icon } from 'antd';
import Lightbox from 'react-images';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
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
  agencyDisclosureFormValidator,
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
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
    paddingBottom: 10,
    flexGrow: 1,
    justifyContent: 'center',
    overflow: 'hidden',
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
    position: 'relative',
    display: 'inline-block',
  },
  fileUploadBtnWrapper: {
    position: 'relative',
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
    top: '5px',
    marginLeft: '6px',
  },
  smallFileViewBtn: {
    width: '35px',
    height: '35px',
    minWidth: '35px',
    minHeight: '35px',
    position: 'absolute',
    backgroundColor: '#008000',
    top: '8px',
    marginLeft: '6px',
    color: '#fff',
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      backgroundColor: '#067706',
    },
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
  ManagementOrCobrokeCompanyTextField: {
    width: '100%',
    margin: 8,
    marginLeft: 0,
  },
  progressBarWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  formSubmittingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  progressBar: {
    width: '25%',
  },
  progressBarExplanation: {
    marginTop: '20px',
    fontSize: '1.1rem',
  },
  gridContainer: {
    marginBottom: 0,
  },
  viewIcon: {
    fontSize: '1.2rem',
  },
});

const radioInputAgentItems = [
  { label: '60%', value: '60' },
  { label: '70%', value: '70' },
  { label: '80%', value: '80' },
];

const radioInputAgentPaymentItems = [
  { label: "I'll pick up the check" },
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
  { label: 'Credit card payment' },
  { label: 'Client wired funds' },
];

const paymentTypeSelectItems = [
  { label: 'Check' },
  { label: 'Money Order' },
  { label: 'Wire' },
  { label: 'Cash' },
  { label: 'Owner Pays (OP)' },
];

const deductionTypeSelectItems = [
  { label: 'Deal Fee' },
  { label: 'Dues' },
  { label: '3rd Party Check' },
  { label: 'Processing Fee' },
  { label: 'Payment' },
  { label: 'Agent Split' },
  { label: 'Add a new item...' },
];

@observer
class SubmitDealForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRenderInitialDeductionItem: true,
      lightboxIsOpen: false,
      currentLightBoxIndex: 0,
      lightboxType: 'agencyDisclosure',
    };
  }
  isFirstTimeRender = true;

  componentDidMount() {
    if (this.props.setInitialContainerState && this.props.submittedDeal) {
      this.props.setInitialContainerState({
        paymentsTotal: this.props.submittedDeal.paymentsTotal,
        deductionsTotal: this.props.submittedDeal.deductionsTotal,
        total: this.props.submittedDeal.total,
      });
    }
  }

  returnAgencyDisclosureURL = () => {
    if (!this.props.submittedDeal) return [];

    if (this.props.submittedDeal.agencyDisclosureForm) {
      return [
        {
          src: this.props.submittedDeal.agencyDisclosureForm,
        },
      ];
    }
  };

  returnContractLeaseURLS = () => {
    if (!this.props.submittedDeal) return [];

    if (this.props.submittedDeal.contractOrLeaseForms) {
      return this.props.submittedDeal.contractOrLeaseForms.map(url => ({
        src: url,
      }));
    }
  };

  openContractLeaseLightBox = () => {
    this.setState({
      lightboxIsOpen: true,
      currentLightBoxIndex: 0,
      lightboxType: 'contractLease',
    });
  };

  openAgencyDisclosureLightBox = () => {
    this.setState({
      lightboxIsOpen: true,
      currentLightBoxIndex: 0,
      lightboxType: 'agencyDisclosure',
    });
  };

  closeLightbox = () => {
    this.setState({ lightboxIsOpen: false });
  };

  onClickPrev = () => {
    const { currentLightBoxIndex } = this.state;

    this.setState({
      currentLightBoxIndex: currentLightBoxIndex - 1,
    });
  };

  onClickNext = () => {
    const { currentLightBoxIndex } = this.state;

    this.setState({
      currentLightBoxIndex: currentLightBoxIndex + 1,
    });
  };

  render() {
    const {
      classes,
      setAgencyDisclosureForm,
      setContractOrLeaseForms,
      agencyDisclosureForm,
      contractOrLeaseForms,
      subtractPaymentValueFromState,
      subtractDeductionValueFromState,
      choosingMgmtCoBrokeCompany,
      toggleChoosingMgmtCoBrokeCompany,
      handleMgmtOrCobrokeCompanyChange,
      setHasSetNewMgmtOrCobrokeCompany,
      newMgmtOrCobrokeCompany,
      addedManagementCompanies,
      agents,
      uplodingFileProgress,
      isUploadingFile,
      uplodingFileText,
      formSubmissionBegun,
      submittingFormToServer,
      submittedDeal,
      isEditingDeal,
      isViewType,
      agentUUID,
      onSubmit,
    } = this.props;

    let managementCobrokeCompanyItems = [
      'Private Landlord',
      'Disney Land',
      'Gucci',
      'Alexander the Great',
      'Apple',
      'Amazon',
    ];

    const agentsSelectItems = agents
      .filter(agent => (agentUUID ? agent.uuid !== agentUUID : agent))
      .map(({ firstName, lastName, uuid }) => ({
        label: `${firstName} ${lastName} (Agent ID - ${uuid})`,
        key: uuid,
        value: uuid,
      }));

    if (isViewType && submittedDeal && submittedDeal.otherAgents.length) {
      const nonAvailableAgentUUIDS = [];
      const agentUUIDS = agents.map(agent => agent.uuid);

      submittedDeal.otherAgents.forEach(agent => {
        if (!agentUUIDS.includes(agent.agentID)) {
          agentsSelectItems.push({
            label: `${agent.agentName} (Agent ID - ${agent.agentID})`,
            key: agent.agentID,
            value: agent.agentID,
          });
        }
      });
    }

    let managementCobrokeCompanySelectItems = managementCobrokeCompanyItems.map(
      company => ({ label: company })
    );

    managementCobrokeCompanySelectItems = managementCobrokeCompanySelectItems
      ? [
          ...managementCobrokeCompanySelectItems,
          ...addedManagementCompanies.map(company => ({ label: company })),
          { label: 'Add a new item...' },
        ]
      : [];

    /*
      const {
        firstName,
        lastName,
        uuid: agentUUID,
        agent: agentPart,
      } = this.props.agent;
      const { agentType, state } = agentPart;
      */

    let finalDefaultValues;

    if (submittedDeal) {
      console.log(submittedDeal);
      const {
        agentNotes,
        agentType,
        agentName,
        alreadyTurnedFundsIn,
        city,
        clientEmail,
        clientName,
        date,
        dealType,
        otherAgents,
        leadSource,
        managementOrCobrokeCompany,
        propertyAddress,
        shouldSendApprovalTextMessageNotification,
        state,
        fundsPaidBy,
        agentPaymentType,
        price,
        paymentsTotal,
        deductionsTotal,
        paymentItems,
        deductionItems,
        apartmentNumber,
        total,
      } = submittedDeal;
      finalDefaultValues = {
        agent: agentName,
        agentNotes,
        agentType,
        otherAgents: otherAgents.map(agent => agent.agentID),
        alreadyTurnedFundsIn,
        city,
        apartmentNumber,
        clientEmail,
        clientName,
        date: moment(date).format('MMMM Do YYYY'),
        dealType,
        leadSource,
        agentPaymentType,
        managementOrCobrokeCompany,
        propertyAddress,
        shouldSendApprovalTextMessageNotification,
        state,
        fundsPaidBy,
        price,
        paymentItems: paymentItems.map(
          ({ paymentType, checkOrTransactionNumber, amount }) => ({
            paymentType,
            checkOrTransactionNumber,
            amount,
          })
        ),
        deductionItems: deductionItems.map(
          ({ deductionType, description, amount }) => ({
            deductionType,
            description,
            amount,
          })
        ),
        paymentsSubtotal: paymentsTotal ? paymentsTotal.toLocaleString() : '0',
        deductionsSubtotal: deductionsTotal
          ? deductionsTotal.toLocaleString()
          : '0',
        financialsTotal: total ? total.toLocaleString() : '0',
      };
    }

    return (
      <div className={classes.formWrapper}>
        {!formSubmissionBegun ? (
          <Form
            defaultValues={
              !finalDefaultValues && this.props.agent
                ? {
                    date: `${moment().format('MMMM Do YYYY')}`,
                    agentType: `${this.props.agent.agent.agentType}`,
                    state: this.props.agent.agent.state,
                    agent: `${capitalize(
                      this.props.agent.firstName
                    )} ${capitalize(this.props.agent.lastName)}`,
                    paymentsSubtotal: this.props.paymentsTotal,
                    deductionsSubtotal: this.props.deductionsTotal,
                  }
                : finalDefaultValues
            }
            preValidate={this.preValidate}
            validateOnMount
            onSubmit={values => {
              if (onSubmit) {
                onSubmit(values);
              }
            }}
            onSubmitFailure={this.props.onSubmitFailure}
            validate={validators}
            getApi={formApi => {
              this.props.getFormApi(formApi);
            }}
          >
            {formApi => {
              /*
              console.log(formApi.errors);
              console.log(formApi.values);
              console.log(formApi.values.deductionItems);
              
              if (this.isFirstTimeRender) {
                this.isFirstTimeRender = false;
                formApi.setValue('date', `${moment().format('MMMM Do YYYY')}`);
                formApi.setValue('agentType', `${agentType}`);
                formApi.setValue('state', state);
                formApi.setValue(
                  'agent',
                  `${capitalize(firstName)} ${capitalize(lastName)}`
                );
                formApi.setValue('paymentsSubtotal', this.props.paymentsTotal);
                formApi.setValue(
                  'deductionsSubtotal',
                  this.props.deductionsTotal
                );
              }
              */

              const renderRestDeductionItems = () => {
                if (
                  !formApi.values.deductionItems ||
                  !formApi.values.deductionItems.length
                )
                  return;
                const deductionItems = formApi.values.deductionItems.map(
                  (deductionItem, i) => (
                    <div className={classes.paymentItemsWrapper} key={i}>
                      <NestedField field={['deductionItems', i]}>
                        <Grid item sm={4} xs={12}>
                          <div className={classes.formControlWrapper}>
                            <MaterialCustomSelectInput
                              field="deductionType"
                              id={uuid()}
                              fullWidth
                              label="Deduction Type"
                              name="deductionType"
                              required
                              selectInputItems={deductionTypeSelectItems}
                              validate={deductionTypeValidator}
                              disabled={submittedDeal && !isEditingDeal}
                            />
                          </div>
                        </Grid>

                        <Grid item sm={4} xs={12}>
                          <div className={classes.formControlWrapper}>
                            <CustomTextField
                              field="description"
                              id={uuid()}
                              label="Description"
                              fullWidth
                              required
                              validate={descriptionValidator}
                              disabled={submittedDeal && !isEditingDeal}
                            />
                          </div>
                        </Grid>

                        <Grid item sm={4} xs={12}>
                          <div className={classes.formControlWrapper}>
                            <CustomTextField
                              field="amount"
                              id={uuid()}
                              label="Amount"
                              fullWidth
                              validate={deductionsAmountValidator}
                              noLetters
                              required
                              noNegativeSign
                              onChangeWithID={
                                this.props.deductionAmountChangeHandler
                              }
                              isDollarAmount
                              disabled={submittedDeal && !isEditingDeal}
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
                            formApi.values.deductionItems[i].amount
                          );

                          if (amount) {
                            subtractDeductionValueFromState(amount);
                          }
                          formApi.removeValue('deductionItems', i);
                        }}
                        type="button"
                      >
                        Remove
                      </Button>
                    </div>
                  )
                );
                if (this.state.shouldRenderInitialDeductionItem) {
                  return deductionItems.slice(1);
                }
                return deductionItems;
              };

              return (
                <form
                  onSubmit={formApi.submitForm}
                  id="form1"
                  className={classes.formRoot}
                >
                  <Grid container spacing={24}>
                    <Grid item sm={6} xs={12}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="date"
                          id={uuid()}
                          label="Date"
                          disabled
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
                          fullWidth
                          required
                        />
                      </div>
                    </Grid>

                    {agentsSelectItems.length ? (
                      <Grid item xs={12}>
                        <div className={classes.formControlWrapper}>
                          <MaterialCustomSelectInput
                            field="otherAgents"
                            id={uuid()}
                            fullWidth
                            label="Other Agents"
                            name="otherAgents"
                            multiple
                            disabled={submittedDeal && !isEditingDeal}
                            selectInputItems={agentsSelectItems}
                            disabled={isViewType}
                          />
                        </div>
                      </Grid>
                    ) : null}

                    <div
                      className={`${classes.formControlWrapper} ${
                        classes.radioInputWrapper
                      }`}
                    >
                      <MaterialCustomRadioInput
                        field="agentType"
                        id={uuid()}
                        required
                        label="Agent Type"
                        radioInputItems={radioInputAgentItems}
                        disabled
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
                          disabled={submittedDeal && !isEditingDeal}
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
                          disabled={submittedDeal && !isEditingDeal}
                          label="Deal Type"
                          name="dealType"
                          selectInputItems={dealTypeSelectItems}
                          disabled={submittedDeal && !isEditingDeal}
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
                          disabled={submittedDeal && !isEditingDeal}
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
                          disabled={submittedDeal && !isEditingDeal}
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
                          disabled={submittedDeal && !isEditingDeal}
                        />
                      </div>
                    </Grid>

                    {!choosingMgmtCoBrokeCompany ? (
                      <Grid item sm={6} xs={12}>
                        <div className={classes.formControlWrapper}>
                          <MaterialCustomSelectInput
                            field="managementOrCobrokeCompany"
                            id={uuid()}
                            required
                            fullWidth
                            label="Management/Co-Broke Company"
                            name="managementOrCobrokeCompany"
                            onChange={value => {
                              if (value === 'Add a new item...') {
                                toggleChoosingMgmtCoBrokeCompany(true);
                              }
                            }}
                            selectInputItems={
                              managementCobrokeCompanySelectItems
                            }
                            disabled={submittedDeal && !isEditingDeal}
                          />
                        </div>
                      </Grid>
                    ) : (
                      <Grid item sm={6} xs={12}>
                        <div className={classes.formControlWrapper}>
                          <TextField
                            id="newManagementOrCobrokeCompany"
                            label="Add Mgmt/Co-broke Company..."
                            value={newMgmtOrCobrokeCompany}
                            className={
                              classes.ManagementOrCobrokeCompanyTextField
                            }
                            onChange={handleMgmtOrCobrokeCompanyChange}
                            margin="normal"
                          />
                        </div>
                        <Button
                          classes={{ root: classes.removePaymentBtn }}
                          variant="raised"
                          color="secondary"
                          style={{ marginLeft: '0' }}
                          onClick={() => {
                            toggleChoosingMgmtCoBrokeCompany(false);
                            formApi.setValue('managementOrCobrokeCompany', '');
                          }}
                          type="button"
                        >
                          Cancel
                        </Button>
                        <Button
                          classes={{ root: classes.addPaymentBtn }}
                          variant="raised"
                          color="primary"
                          style={{ marginLeft: '10px', marginTop: '5px' }}
                          onClick={() => {
                            const trimmedItem = newMgmtOrCobrokeCompany.trim();
                            if (!newMgmtOrCobrokeCompany || !trimmedItem)
                              return;

                            const items = [
                              ...managementCobrokeCompanyItems,
                              ...addedManagementCompanies,
                            ];

                            const regex = new RegExp(trimmedItem, 'i');

                            const match = items.filter(item =>
                              item.match(regex)
                            );

                            if (match.length) {
                              toggleChoosingMgmtCoBrokeCompany(false);
                              formApi.setValue(
                                'managementOrCobrokeCompany',
                                match[0]
                              );
                              return;
                            }

                            setHasSetNewMgmtOrCobrokeCompany();
                            formApi.setValue(
                              'managementOrCobrokeCompany',
                              capitalize(newMgmtOrCobrokeCompany)
                            );
                          }}
                          type="button"
                        >
                          Add Item
                        </Button>
                      </Grid>
                    )}

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
                          disabled={submittedDeal && !isEditingDeal}
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

                    <Grid item sm={6} xs={12}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="clientName"
                          id={uuid()}
                          label="Client's Name"
                          required
                          fullWidth
                          disabled={submittedDeal && !isEditingDeal}
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
                          type="email"
                          disabled={submittedDeal && !isEditingDeal}
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
                            disabled={submittedDeal && !isEditingDeal}
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
                            disabled={submittedDeal && !isEditingDeal}
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
                            disabled={submittedDeal && !isEditingDeal}
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
                                    disabled={submittedDeal && !isEditingDeal}
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
                                    disabled={submittedDeal && !isEditingDeal}
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
                                    disabled={submittedDeal && !isEditingDeal}
                                  />
                                </div>
                              </Grid>
                            </NestedField>
                            {submittedDeal && !isEditingDeal ? null : (
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
                            )}
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
                        disabled={submittedDeal && !isEditingDeal}
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
                          submittedValue={this.props.paymentsTotal}
                          formApi={formApi}
                          convertToLocaleString
                          isDollarAmount
                        />
                      </div>
                    </Grid>

                    <div className={classes.formMiniHeading2}>
                      <Typography
                        variant="subheading"
                        classes={{
                          subheading: classes.h4,
                          root: classes.redText,
                        }}
                      >
                        Deductions:
                      </Typography>
                    </div>

                    {this.state.shouldRenderInitialDeductionItem ? (
                      <div className={classes.paymentItemsWrapper}>
                        <NestedField field={['deductionItems', 0]}>
                          <Grid item sm={4} xs={12}>
                            <div className={classes.formControlWrapper}>
                              <MaterialCustomSelectInput
                                field="deductionType"
                                id={uuid()}
                                fullWidth
                                label="Deduction Type"
                                name="deductionType"
                                required
                                selectInputItems={deductionTypeSelectItems}
                                validate={deductionTypeValidator}
                                disabled={submittedDeal && !isEditingDeal}
                              />
                            </div>
                          </Grid>

                          <Grid item sm={4} xs={12}>
                            <div className={classes.formControlWrapper}>
                              <CustomTextField
                                field="description"
                                id={uuid()}
                                label="Description"
                                fullWidth
                                required
                                validate={descriptionValidator}
                                disabled={submittedDeal && !isEditingDeal}
                              />
                            </div>
                          </Grid>

                          <Grid item sm={4} xs={12}>
                            <div className={classes.formControlWrapper}>
                              <CustomTextField
                                field="amount"
                                id={uuid()}
                                label="Amount"
                                fullWidth
                                validate={deductionsAmountValidator}
                                noLetters
                                required
                                noNegativeSign
                                onChangeWithID={
                                  this.props.deductionAmountChangeHandler
                                }
                                isDollarAmount
                                disabled={submittedDeal && !isEditingDeal}
                              />
                            </div>
                          </Grid>
                        </NestedField>
                        {submittedDeal && !isEditingDeal ? null : (
                          <Button
                            classes={{ root: classes.removePaymentBtn }}
                            variant="raised"
                            color="secondary"
                            onClick={() => {
                              this.setState({
                                shouldRenderInitialDeductionItem: false,
                              });
                              const amount = Number(
                                formApi.values.deductionItems[0].amount
                              );

                              if (amount) {
                                subtractDeductionValueFromState(amount);
                              }
                              formApi.removeValue('deductionItems', 0);
                            }}
                            type="button"
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    ) : null}

                    {renderRestDeductionItems()}
                    <Grid item xs={12}>
                      <Button
                        classes={{ root: classes.addPaymentBtn }}
                        variant="raised"
                        color="primary"
                        onClick={() => formApi.addValue('deductionItems')}
                        type="button"
                        disabled={submittedDeal && !isEditingDeal}
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
                          submittedValue={`${this.props.deductionsTotal}`}
                          formApi={formApi}
                          convertToLocaleString
                          isDollarAmount
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
                          submittedValue={`${this.props.total}`}
                          formApi={formApi}
                          convertToLocaleString
                          isDollarAmount
                          inputRootClassName={classes.finalTotalInputClass}
                        />
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <div className={classes.formControlWrapper}>
                        <CustomTextField
                          field="agentNotes"
                          id={uuid()}
                          label="Notes"
                          fullWidth
                          multiline
                          disabled={submittedDeal && !isEditingDeal}
                        />
                      </div>
                    </Grid>

                    <div className={classes.formMiniHeading2}>
                      <Typography
                        variant="subheading"
                        classes={{ subheading: classes.h4 }}
                      >
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
                          id="agencyDisclosureUploadForm"
                          label="Upload Agency Disclosure Form*"
                          btnClassName={classes.uploadBtnClassName}
                          required={isEditingDeal ? false : true}
                          customOnChange={setAgencyDisclosureForm}
                          customState={agencyDisclosureForm}
                          helperInfo="Agency Disclosure Form* (PDF or JPEG/JPG file)"
                          acceptedFileExtensions={acceptedFileExtensions}
                          accept=".jpeg, .jpg, .pdf"
                          disabled={submittedDeal && !isEditingDeal}
                          validate={
                            isViewType
                              ? undefined
                              : agencyDisclosureFormValidator
                          }
                        />
                        {submittedDeal &&
                        submittedDeal.agencyDisclosureForm &&
                        !agencyDisclosureForm ? (
                          <Button
                            variant="fab"
                            color="primary"
                            aria-label="add"
                            size="small"
                            classes={{ root: classes.smallFileViewBtn }}
                            onClick={this.openAgencyDisclosureLightBox}
                          >
                            <EyeIcon className={classes.viewIcon} />
                          </Button>
                        ) : null}
                        {isEditingDeal && agencyDisclosureForm ? (
                          <Button
                            variant="fab"
                            color="secondary"
                            aria-label="add"
                            size="small"
                            classes={{ root: classes.smallFileRemoveBtn }}
                            onClick={() => {
                              setAgencyDisclosureForm('');
                            }}
                          >
                            <DeleteIcon />
                          </Button>
                        ) : null}
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <div className={classes.fileUploadBtnWrapper}>
                        <CustomFileUploadInputBtn
                          field="contractOrLeaseItems"
                          id="contractOrLeaseItemsUploadForm"
                          label="Upload your Contract or Lease items"
                          btnClassName={classes.uploadBtnClassName}
                          multiple
                          customOnChange={setContractOrLeaseForms}
                          customState={contractOrLeaseForms}
                          helperInfo="Contract or Lease items (PDF or JPEG/JPG files)"
                          acceptedFileExtensions={acceptedFileExtensions}
                          accept=".jpeg, .jpg, .pdf"
                          disabled={submittedDeal && !isEditingDeal}
                        />
                        {submittedDeal &&
                        submittedDeal.contractOrLeaseForms &&
                        submittedDeal.contractOrLeaseForms.length &&
                        !(
                          contractOrLeaseForms && contractOrLeaseForms.length
                        ) ? (
                          <Button
                            variant="fab"
                            color="primary"
                            aria-label="add"
                            size="small"
                            classes={{ root: classes.smallFileViewBtn }}
                            onClick={this.openContractLeaseLightBox}
                          >
                            <EyeIcon className={classes.viewIcon} />
                          </Button>
                        ) : null}
                        {contractOrLeaseForms.length ? (
                          <Button
                            variant="fab"
                            color="secondary"
                            aria-label="add"
                            size="small"
                            classes={{ root: classes.smallFileRemoveBtn }}
                            onClick={() => {
                              setContractOrLeaseForms([]);
                            }}
                          >
                            <DeleteIcon />
                          </Button>
                        ) : null}
                      </div>
                    </Grid>

                    {/*
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
                    */}

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

                    <div
                      className={`${classes.formControlWrapper} ${
                        classes.radioInputWrapper
                      }`}
                    >
                      <MaterialCustomRadioInput
                        field="agentPaymentType"
                        id={uuid()}
                        required
                        label="How would you like to get paid?"
                        radioInputItems={radioInputAgentPaymentItems}
                        horizontal
                        disabled={submittedDeal && !isEditingDeal}
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
                          disabled={submittedDeal && !isEditingDeal}
                        />
                      </div>
                    </Grid>

                    <div
                      className={`${classes.formControlWrapper} ${
                        classes.radioInputWrapper
                      }`}
                    >
                      <MaterialCustomRadioInput
                        field="alreadyTurnedFundsIn"
                        id={uuid()}
                        required
                        label="Have you already deposited or given the funds to us?"
                        radioInputItems={radioInputYesNoItems}
                        horizontal
                        disabled={submittedDeal && !isEditingDeal}
                      />
                    </div>

                    <div
                      className={`${classes.formControlWrapper} ${
                        classes.radioInputWrapper
                      }`}
                    >
                      <MaterialCustomRadioInput
                        field="shouldSendApprovalTextMessageNotification"
                        id={uuid()}
                        required
                        label="Want to recieve a text notification upon deal approval?"
                        radioInputItems={radioInputYesNoItems}
                        horizontal
                        disabled={submittedDeal && !isEditingDeal}
                      />
                    </div>
                  </Grid>
                </form>
              );
            }}
          </Form>
        ) : null}

        {submittingFormToServer ? (
          <div className={classes.formSubmittingWrapper}>
            <Icon type="loading" style={{ color: '#000', fontSize: '4rem' }} />
            <div className={classes.progressBarExplanation}>
              Finishing submission...
            </div>
          </div>
        ) : null}

        {isUploadingFile ? (
          <div className={classes.progressBarWrapper}>
            <CircularProgressbar
              className={classes.progressBar}
              percentage={uplodingFileProgress}
              styles={{
                path: {
                  stroke: `rgba(62, 152, 199, ${uplodingFileProgress / 100})`,
                },
              }}
            />
            <div className={classes.progressBarExplanation}>
              {uplodingFileText || 'Uploading file picture...'}
            </div>
          </div>
        ) : null}

        <Lightbox
          images={
            this.state.lightboxType === 'agencyDisclosure'
              ? this.returnAgencyDisclosureURL()
              : this.returnContractLeaseURLS()
          }
          isOpen={this.state.lightboxIsOpen}
          onClose={this.closeLightbox}
          onClickPrev={this.onClickPrev}
          onClickNext={this.onClickNext}
          currentImage={this.state.currentLightBoxIndex}
          backdropClosesModal
        />
      </div>
    );
  }
}

export default withStyles(styles)(SubmitDealForm);
