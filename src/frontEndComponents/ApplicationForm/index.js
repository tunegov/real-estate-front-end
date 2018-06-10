import React from 'react';
import { observer } from 'mobx-react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { Form } from 'react-form';
import validators from './validators';

const styles = theme => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: 1200,
  },
});

@withStyles(styles)
@observer
class ApplicationForm extends React.Component {
  preValidate = (values, formApi) => {
    Object.keys(values).forEach(property => {
      const val = values[property];
      if (typeof val === 'string') {
        values[property] = val.trim();
      }
    });
    return values;
  };

  render() {
    const { classes, onSubmit, onSubmitFailure } = this.props;

    return (
      <div className={classes.root}>
        <Form
          preValidate={this.preValidate}
          onSubmit={onSubmit}
          onSubmitFailure={onSubmitFailure}
          validate={validators}
        >
          {formApi => {
            return (
              <form
                onSubmit={formApi.submitForm}
                id="applicationForm"
                classes={classes.formRoot}
              >
                <Grid container spacing={24}>
                  <Grid item xs={12}>
                    <div>Nice</div>
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

export default ApplicationForm;
