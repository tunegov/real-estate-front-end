import React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { Field } from 'react-form';

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

const CustomTextFieldWrapper = props => (
  <Field validate={props.validate} field={props.field}>
    {fieldApi => {
      const {
        onInput,
        classes,
        submittedClasses,
        label,
        id,
        disabled,
        fullWidth,
        required,
        multiline,
        field,
        onBlur,
        onChange,
        inputClassName,
        labelClassName,
        ...rest
      } = props;

      const {
        value,
        error,
        warning,
        success,
        setValue,
        setTouched,
        touched,
      } = fieldApi;

      return (
        <FormControl
          className={disabled ? `${classes.formControl} ${classes.disabled}` : classes.formControl}
          error={error && touched}
          disabled={disabled}
          fullWidth={fullWidth}
          required={required}
        >
          {label ? <InputLabel htmlFor={id} className={disabled ? `${classes.disabled} ${labelClassName}` : `${labelClassName}`}>{label}</InputLabel> : null}
          <Input
            className={disabled ? classes.disabled : null}
            inputProps={{ className: disabled ? `${classes.disabled} ${inputClassName}` : `${inputClassName}` }}
            value={value || ''}
            id={id}
            onChange={e => {
              setValue(e.target.value);
              if (onChange) {
                onChange(e.target.value, e);
              }
            }}
            onBlur={event => {
              if (event.target.value || touched) setTouched();
              if (onBlur) {
                onBlur(event);
              }
            }}
            multiline={multiline}
            {...rest}
          />
          {error && touched ? <FormHelperText id={`${id}-error-text`}>{error}</FormHelperText> : null}
        </FormControl>
      );
    }}
  </Field>
);

export default withStyles(styles)(observer(CustomTextFieldWrapper));

/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/
