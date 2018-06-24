import React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Chip from 'material-ui/Chip';
import { Field } from 'react-form';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  disabled: {
    cursor: 'not-allowed',
  },
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit,
    marginLeft: 0,
    minWidth: 120,
  },
  fullWidth: {
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  input: {
    textAlign: 'left',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});

const MaterialCustomSelectInputWrapper = props => (
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
        selectInputItems,
        horizontal,
        className,
        multiple,
        name,
        validate,
        SelectDisplayProps,
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

      const renderSelectInputItems = selectInputItems =>
        selectInputItems.map(item => (
          <MenuItem
            key={item.key || item.label}
            value={item.value || item.label}
          >
            {item.label}
          </MenuItem>
        ));

      return (
        <FormControl
          error={error && touched}
          fullWidth={fullWidth}
          required={required}
          className={
            disabled
              ? `${classes.formControl} ${classes.disabled} ${className}`
              : `${classes.formControl} ${className}`
          }
        >
          <InputLabel htmlFor={`${id}-error`}>{label}</InputLabel>
          <Select
            value={multiple ? value || [] : value || ''}
            SelectDisplayProps={
              SelectDisplayProps || { style: { backgroundColor: 'inherit' } }
            }
            onChange={event => {
              setValue(event.target.value);
              if (onChange) {
                onChange(event.target.value);
              }
              if (onInput) {
                onInput(event);
              }
            }}
            input={
              <Input
                name={name}
                id={`${id}-helper`}
                className={classes.input}
              />
            }
            onBlur={event => {
              if (event.target.value || touched) setTouched();
              if (onBlur) {
                onBlur(event);
              }
            }}
            multiple={multiple}
            renderValue={
              !multiple
                ? null
                : selected => (
                    <div className={classes.chips}>
                      {selected.map(value => (
                        <Chip
                          key={value}
                          label={value}
                          className={classes.chip}
                        />
                      ))}
                    </div>
                  )
            }
            {...rest}
          >
            {renderSelectInputItems(selectInputItems)}
          </Select>
          {error && touched ? <FormHelperText>{error}</FormHelperText> : null}
        </FormControl>
      );
    }}
  </Field>
);

export default withStyles(styles)(observer(MaterialCustomSelectInputWrapper));

/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/
