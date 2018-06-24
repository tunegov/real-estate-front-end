import React from 'react';
import InputMask from 'react-input-mask';

class Input extends React.Component {
  beforeOfficeNumberMaskedValueChange = (newState, oldState, userInput) => {
    let { value } = newState;
    let { selection } = newState;
    let cursorPosition = selection ? selection.start : null;

    // keep minus if entered by user
    if (value.endsWith('x') && userInput !== 'x') {
      if (cursorPosition === value.length) {
        cursorPosition--;
        selection = { start: cursorPosition, end: cursorPosition };
      }
      value = value.slice(0, -2);
    }

    return {
      value,
      selection,
    };
  };

  beforeMaskedValueChange = () => {
    if (this.props.beforeMaskedValueChange)
      return this.props.beforeMaskedValueChange;
    if (this.props.officePhoneNumber)
      return this.beforeOfficeNumberMaskedValueChange;
    return undefined;
  };

  render() {
    const { props } = this;
    const { beforeMaskedValueChange, officePhoneNumber, ...restProps } = props;

    return (
      <InputMask
        onChange={this.onChange}
        beforeMaskedValueChange={this.beforeMaskedValueChange()}
        {...restProps}
      />
    );
  }
}

export default Input;
