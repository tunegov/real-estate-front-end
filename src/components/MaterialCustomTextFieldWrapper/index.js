import React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  disabled: {
    cursor: 'not-allowed',
  },
});

@observer
class CustomTextFieldWrapper extends React.Component {
  render() {
    const {
      fieldApi,
      onInput,
      classes,
      label,
      id,
      disabled,
      value,
      fullWidth,
      required,
      multiline,
      ...rest
    } = this.props;

    const {
      getValue,
      getError,
      getWarning,
      getSuccess,
      setValue,
      setTouched,
      getTouched,
    } = fieldApi;

    const error = getError();
    const warning = getWarning();
    const success = getSuccess();
    const touched = getTouched();

    return (
      <FormControl
        className={disabled ? `${classes.formControl} ${classes.disabled}` : classes.formControl}
        error={error && touched}
        disabled={disabled}
        fullWidth={fullWidth}
        required={required}
      >
        {label ? <InputLabel htmlFor={id} className={disabled ? classes.disabled : null}>{label}</InputLabel> : null}
        <Input
          className={disabled ? classes.disabled : null}
          inputProps={{ className: disabled ? classes.disabled : null }}
          value={value || getValue() || ''}
          id={id}
          onInput={event => {
            setValue(event.target.value);
            if (onInput) {
              onInput(event);
            }
          }}
          onBlur={event => {
            if (event.target.value || touched) setTouched();
          }}
          multiline={multiline}
          {...rest}
        />
        {error && touched ? <FormHelperText id={`${id}-error-text`}>{error}</FormHelperText> : null}
      </FormControl>
    );
  }
}

export default withStyles(styles)(CustomTextFieldWrapper);

/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/
