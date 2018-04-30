import React, { Component } from 'react';
import { observer } from 'mobx-react';
import CreateAgentForm from '../components/forms/CreateAgentForm';
import { round } from '../utils/Math';

@observer
class CreateAgentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: '',
      imageScale: 0,
      adjustedImageScale: 1,
    };
  }

  setImageFile = file => {
    console.log('set image file func called');
    this.setState({ imageFile: file });
  };

  clearImageFile = () => {
    console.log('clear image file func called');
    this.setState({ imageFile: '' });
    this._fileUploadInput.value = null;
  };

  getFileUploadInput = input => {
    this._fileUploadInput = input;
  }

  getProfilePicEditor = editor => {
    this._profilePicEditor = editor;
  }

  setImageScale = num => {
    const rawScale = Number(num);
    const adjustedImageScale = round(1 + (rawScale / 100), 2);
    this.setState({ imageScale: rawScale, adjustedImageScale });
  };

  onProfilePicEditorSave = () => {
    if (this._profilePicEditor) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const imgURL = this._profilePicEditor.getImage().toDataURL();

      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      const canvasScaled = this._profilePicEditor.getImageScaledToCanvas();
    }
  }

  onSubmit(values) {
    const { imageFile } = this.state;
    console.log(values);
    console.log(imageFile);
  }

  onSubmitFailure(errs, onSubmitError) {
    console.log(onSubmitError);
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <CreateAgentForm
          onSubmit={this.onSubmit}
          onSubmitFailure={this.onSubmitFailure}
          setImageFile={this.setImageFile}
          imageFile={this.state.imageFile}
          imageScale={this.state.imageScale}
          setImageScale={this.setImageScale}
          adjustedImageScale={this.state.adjustedImageScale}
          getFileUploadInput={this.getFileUploadInput}
          clearImageFile={this.clearImageFile}
          getProfilePicEditor={this.getProfilePicEditor}
          {...rest}
        />
      </div>
    );
  }
}

export default CreateAgentContainer;
