import React, { Component } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';
import CreateAgentForm from '../components/forms/CreateAgentForm';
import { round } from '../utils/Math';

@observer
class CreateAgentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: '',
      imageFileConfirmed: false,
      confirmedImageDataURL: null,
      imageScale: 0,
      adjustedImageScale: 1,
      loadingSetImg: false,
      uplodingImageProgress: 0,
      isUploadingImage: false,
      formSubmitedSuccessfully: false,
      imageBlob: null,
    };
  }

  setImageFile = file => {
    this.setState({ imageFile: file });
  };

  clearImageFile = () => {
    this.setState({
      imageFile: '',
      imageFileConfirmed: false,
      confirmedImageDataURL: null,
    });

    if (this._fileUploadInput) {
      this._fileUploadInput.value = null;
    }
  };

  getFileUploadInput = input => {
    this._fileUploadInput = input;
  };

  getProfilePicEditor = editor => {
    this._profilePicEditor = editor;
  };

  setImageScale = num => {
    const rawScale = Number(num);
    const adjustedImageScale = round(1 + rawScale / 100, 2);
    this.setState({ imageScale: rawScale, adjustedImageScale });
  };

  confirmImageFile = () => {
    if (this._profilePicEditor) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = this._profilePicEditor.getImage();

      canvas.toBlob(blob => {
        this.setState({
          imageBlob: blob,
          imageFileConfirmed: true,
          loadingSetImg: true,
          confirmedImageDataURL: URL.createObjectURL(blob),
        });
      });
      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      // const canvasScaled = this._profilePicEditor.getImageScaledToCanvas();
    }
  };

  setFinishedLoadingImg = () => {
    this.setState({ loadingSetImg: false });
  };

  onSubmit = (values, e, formApi) => {
    const { imageFile, imageFileConfirmed } = this.state;
    const returnValues = {
      fileName: imageFile && imageFileConfirmed ? imageFile.name : undefined,
      fileType: imageFile && imageFileConfirmed ? imageFile.type : undefined,
    };

    this.props.setIsSubmittingForm();

    Object.keys(values).forEach(key => {
      if (key === 'profilePicture' || typeof values[key] === 'undefined')
        return;

      if (key === 'agentType') {
        returnValues[key] = values[key].slice(0, -1);
      } else {
        returnValues[key] = values[key];
      }
    });

    this.props.createAgent(returnValues).then(result => {
      const { signedURL, error, agent } = result;

      this.props.setNotSubmittingForm();

      if (error) {
        if (error.field === 'email') {
          const formElement = document.getElementById('formDialog');
          formApi.setError(error.field, error.message);
          formElement.scrollTop = formElement.scrollHeight;
        }
        return;
      }

      if (signedURL) {
        axios
          .put(signedURL, this.state.imageBlob, {
            headers: {
              'Content-Type': this.state.imageFile.type,
            },
            onUploadProgress: progressEvent => {
              // Do whatever you want with the native progress event
              const loadedPercent =
                (progressEvent.loaded / progressEvent.total) * 100;
              this.setState({
                formSubmitedSuccessfully: true,
                uplodingImageProgress: Math.floor(loadedPercent),
                isUploadingImage: loadedPercent >= 100 ? false : true,
              });

              if (loadedPercent >= 100) this.props.confirmAgentCreated();
            },
          })
          .then(() => {
            this.props.setAgentProfilePic(
              agent.uuid,
              this.state.imageFile.name
            );
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.setState({ formSubmitedSuccessfully: true });
      }

      if (!imageFileConfirmed) {
        this.props.confirmAgentCreated();
      }
    });
  };

  onSubmitFailure(errs, onSubmitError) {
    console.log(errs);
    console.log(onSubmitError);
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div style={{ width: '100%' }}>
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
          imageFileConfirmed={this.state.imageFileConfirmed}
          confirmImageFile={this.confirmImageFile}
          confirmedImageDataURL={this.state.confirmedImageDataURL}
          loadingSetImg={this.state.loadingSetImg}
          setFinishedLoadingImg={this.setFinishedLoadingImg}
          uplodingImageProgress={this.state.uplodingImageProgress}
          formSubmitedSuccessfully={this.state.formSubmitedSuccessfully}
          isUploadingImage={this.state.isUploadingImage}
          getFormApi={formApi => {
            console.log(formApi);
            this._formApi = formApi;
          }}
          {...rest}
        />
      </div>
    );
  }
}

export default CreateAgentContainer;
