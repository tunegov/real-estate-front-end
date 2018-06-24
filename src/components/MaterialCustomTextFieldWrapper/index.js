import React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { Field } from 'react-form';
import uuid from 'uuid/v4';
import debounce from '../../utils/debounce';

const numbersOnlyRegex = /^\d+$/;
const noLettersRegex = /^[^a-zA-Z]+$/;
const noNegativeSignRegex = /^[^-]/;

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    marginLeft: 0,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  disabled: {
    cursor: 'not-allowed',
  },
  redErrorText: {
    color: '#f44336',
  },
});

class CustomTextFieldWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      submittedValue: this.props.submittedValue,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { convertToLocaleString } = nextProps;
    if (
      nextProps.formApi &&
      nextProps.submittedValue !== prevState.submittedValue
    ) {
      const val = convertToLocaleString
        ? Number(nextProps.submittedValue).toLocaleString()
        : nextProps.submittedValue;
      nextProps.formApi.setValue(nextProps.field, val);
      return { submittedValue: nextProps.submittedValue };
    }
    return null;
  }

  returnStartAdornment = () => {
    const { isDollarAmount, isPercentAmount } = this.props;
    if (isDollarAmount) {
      return <InputAdornment position="start">$</InputAdornment>;
    } else if (isPercentAmount) {
      return <InputAdornment position="start">%</InputAdornment>;
    }
    return null;
  };

  render() {
    const { returnStartAdornment } = this;

    return (
      <Field validate={this.props.validate} field={this.props.field}>
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
            validate,
            numbersOnly,
            noLetters,
            onChangeWithID,
            submittedValue,
            noNegativeSign,
            convertToLocaleString,
            formApi,
            isDollarAmount,
            inputRootClassName,
            isPercentAmount,
            requiresDefaultOnChange,
            isInputMasked,
            ...rest
          } = this.props;

          const {
            value,
            error,
            warning,
            success,
            setValue,
            setTouched,
            touched,
          } = fieldApi;

          const returnValue = () => {
            if (isInputMasked) {
              return undefined;
            } else {
              return value || '';
            }
          };

          return (
            <FormControl
              className={
                disabled
                  ? `${classes.formControl} ${classes.disabled}`
                  : classes.formControl
              }
              error={error && touched}
              disabled={disabled}
              fullWidth={fullWidth}
              required={required}
            >
              {label ? (
                <InputLabel
                  htmlFor={id}
                  className={
                    disabled
                      ? `${classes.disabled} ${labelClassName}`
                      : `${labelClassName}`
                  }
                >
                  {label}
                </InputLabel>
              ) : null}
              <Input
                inputRef={ref => (this._input = ref)}
                className={disabled ? classes.disabled : null}
                inputProps={{
                  className: disabled
                    ? `${classes.disabled} ${inputClassName}`
                    : `${inputClassName}`,
                }}
                value={returnValue()}
                classes={
                  inputRootClassName ? { root: inputRootClassName } : null
                }
                id={id}
                onInput={
                  isInputMasked
                    ? debounce(() => {
                        if (this._input) {
                          setValue(this._input.value);
                        }
                      }, 250)
                    : undefined
                }
                onChange={e => {
                  const newValue = e.target.value;
                  if (
                    numbersOnly &&
                    newValue &&
                    !numbersOnlyRegex.test(newValue)
                  ) {
                    return;
                  }

                  if (noLetters && newValue && !noLettersRegex.test(newValue)) {
                    return;
                  }

                  if (
                    noNegativeSign &&
                    newValue &&
                    !noNegativeSignRegex.test(newValue)
                  ) {
                    return;
                  }

                  if (!isInputMasked) {
                    setValue(newValue);
                  }

                  if (onChange && typeof onChange === 'function') {
                    if (requiresDefaultOnChange) {
                      onChange(e, setValue);
                    } else {
                      onChange(newValue, setValue, e);
                    }
                  }

                  if (onChangeWithID && typeof onChangeWithID === 'function') {
                    onChangeWithID(this.state.id, newValue, e);
                  }
                }}
                onBlur={event => {
                  if (event.target.value || touched) setTouched();
                  if (onBlur) {
                    onBlur(event);
                  }
                }}
                multiline={multiline}
                startAdornment={returnStartAdornment()}
                {...rest}
              />
              {error && touched ? (
                <FormHelperText
                  classes={{ root: classes.redErrorText }}
                  id={`${id}-error-text`}
                >
                  {error}
                </FormHelperText>
              ) : null}
            </FormControl>
          );
        }}
      </Field>
    );
  }
}

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
