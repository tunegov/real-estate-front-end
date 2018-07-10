import React, { Component } from 'react';
import { Form } from 'react-form';
import uuid from 'uuid/v4';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import withSizes from 'react-sizes';
import 'react-circular-progressbar/dist/styles.css';
import validators from './formValidation';
import MaterialCustomTextFieldWrapper from '../../MaterialCustomTextFieldWrapper';

const CustomTextField = MaterialCustomTextFieldWrapper;

const mapSizesToProps = ({ width }) => ({
  smViewport: width < 600,
  mdViewport: width < 960,
  lgViewport: width < 1280,
});

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: '30px 40px',
    [theme.breakpoints.down('md')]: {
      padding: '30px 0',
    },
    backgroundColor: '#fff',
  },
  formRoot: {
    maxWidth: '100%',
  },
  formControlWrapper: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  sliderWrapper: {
    width: '100%',
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
});

@withSizes(mapSizesToProps)
class CreateAgentForm extends Component {
  render() {
    const { classes, onSubmit } = this.props;

    return (
      <div className={classes.root}>
        <Form
          preValidate={this.preValidate}
          onSubmit={onSubmit}
          onSubmitFailure={this.props.onSubmitFailure}
          validate={validators}
          getApi={this.props.getFormApi}
        >
          {formApi => {
            return (
              <form
                onSubmit={formApi.submitForm}
                id="form1"
                className={classes.formRoot}
              >
                <Grid container spacing={8}>
                  <Grid item xs={12}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="password"
                        id={uuid()}
                        label="New Password"
                        fullWidth
                        required
                        type="password"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="passwordConfirmation"
                        id={uuid()}
                        label="New Password Confirmation"
                        fullWidth
                        required
                        type="password"
                      />
                    </div>
                  </Grid>
                </Grid>
              </form>
            );
          }}
        </Form>
      </div>
    );
  }
}

export default withStyles(styles)(CreateAgentForm);
