import React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
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
  input: {
    width: '0.1px',
    height: '0.1px',
    opacity: '0',
    overflow: 'hidden',
    position: 'absolute',
    zIndex: '-1',
  },
});

const CustomFileUploadInputWrapper = props => (
  <Field validate={props.validate} field={props.field}>
    {fieldApi => {
      const {
        onInput,
        classes,
        label,
        id,
        disabled,
        fullWidth,
        required,
        multiline,
        field,
        onBlur,
        onChange,
        btnClassName,
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
          className={classes.formControl}
          error={error && touched}
          fullWidth={fullWidth}
          required={required}
        >
          <label htmlFor={id} className={btnClassName || ''}>{label}</label>
          <input
            className={classes.input}
            type="file"
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
            {...rest}
          />
          {error && touched ? <FormHelperText id={`${id}-error-text`}>{error}</FormHelperText> : null}
        </FormControl>
      );
    }}
  </Field>
);

export default withStyles(styles)(observer(CustomFileUploadInputWrapper));

/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/
