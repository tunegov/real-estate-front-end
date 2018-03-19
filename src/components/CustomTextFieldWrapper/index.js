import React from 'react';
import { observer } from 'mobx-react';
import { Input, InputWrapper, FormMessage } from './styledComponents';

// Define a custom message component
const Message = ({ color, message }) => (
  <div>
    <FormMessage color={color}>{message}</FormMessage>
  </div>
);

@observer
class CustomTextFieldWrapper extends React.Component {
  render() {
    const { fieldApi, onInput, ...rest } = this.props;

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
      <InputWrapper>
        <Input
          value={getValue() || ''}
          onInput={event => {
            setValue(event.target.value);
            if (onInput) {
              onInput(event);
            }
          }}
          onBlur={event => {
            if (event.target.value || touched) setTouched();
          }}
          {...rest}
        />
        {error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}
      </InputWrapper>
    );
  }
}

export default CustomTextFieldWrapper;
