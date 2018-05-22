import * as emailValidator from 'email-validator';

const dollarAmountOnlyRegex = /^[0-9]+(\.[0-9][0-9])?$/;

const validator = values => {
  return {
    date: !values.date ? 'This value is required' : null,
    agent: !values.agent || !values.agent.length ? 'This value is required' : null,
    agentType: !values.agentType ? 'This value is required' : null,
    dealType: !values.dealType ? 'This value is required' : null,
    propertyAddress: !values.propertyAddress ? 'This value is required' : null,
    city: !values.city ? 'This value is required' : null,
    state: !values.state ? 'This value is required' : null,
    apartmentNumber: !values.apartmentNumber ? 'This value is required' : null,
    managementOrCobrokeCompany: !values.managementOrCobrokeCompany ? 'This value is required' : null,
    price: !values.price || !dollarAmountOnlyRegex.test(values.price) ? 'This value is required and must be a dollar amount' : null,
    clientName:
      !values.clientName ||
        values.clientName.length < 3 ||
        values.clientName.length > 80
        ? 'Between 3 and 80 characters'
        : null,
    clientPhoneNumber: !values.clientPhoneNumber ? 'This value is required' : null,
    shouldSendApprovalTextMessageNotificaion: !values.shouldSendApprovalTextMessageNotificaion ? 'This value is required' : null,
    financialsTotal: values.financialsTotal <= 0 ? 'The total amount for this invoice must be greater than 0' : null,
    attention: !values.attention ? 'This value is required' : null,
    attentionEmail: !values.attentionEmail ? 'This value is required' : null,
  };
};

export const paymentTypeValidator = value => ({
  error: !value ? 'This value is required' : null,
});

export const checkOrTransactionNumberValidator = value => ({
  error: !value ? 'This value is required' : null,
});

export const paymentAmountValidator = value => ({
  error: !value || !dollarAmountOnlyRegex.test(value) ? 'This value is required and must be a dollar amount' : null,
});

export const descriptionValidator = value => ({
  error: !value ? 'This value is required' : null,
});

export default validator;
