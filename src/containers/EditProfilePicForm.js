import React, { Component } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';
import EditProfilePicForm from '../components/forms/EditProfilePicForm';
import { round } from '../utils/Math';
import getProfilePicSignedURL from '../effects/getProfilePicSignedURL';
import setAgentProfilePic from '../effects/users/setAgentProfilePic';

@observer
class EditProfilePicFormContainer extends Component {
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
    const { imageFile, imageFileConfirmed, imageBlob } = this.state;
    if (!imageFile || !imageFileConfirmed) return;
    this.props.setFormSubmitted();

    const returnValues = {
      fileName: imageFile.name,
      fileType: imageFile.type,
      uuid: this.props.uuid,
    };

    console.log(returnValues);

    this.props.toggleSubmittingEditProfilePicForm(true);

    getProfilePicSignedURL(returnValues)
      .then(result => {
        const { item, error } = result;

        let hasError;

        if (error) {
          console.log(error);
          hasError = true;
        }

        if (!item && item[0] && item[0].error) {
          console.log(item[0].error);
          hasError = true;
        }

        if (hasError) {
          this.props.openRequestErrorSnackbar();
          this.props.toggleSubmittingEditProfilePicForm(false);
          this.props.setFormSubmitted(false);
          return;
        }

        if (item[0].signedURL) {
          axios
            .put(item[0].signedURL, imageBlob, {
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
              },
            })
            .then(response => {
              const status = `${response.status}`;
              const okRegex = /^[2][0-9][0-9]$/;

              if (!okRegex.test(status)) {
                this.setState({
                  isUploadingImage: false,
                });
                this.props.setFormSubmitted(false);

                if (this.props.openRequestErrorSnackbar) {
                  this.props.openRequestErrorSnackbar(
                    'There was an error uploading your file. Please try again shortly.'
                  );
                }

                return;
              }

              setAgentProfilePic(this.props.uuid, item[0].fileName).then(
                res => {
                  this.props.setFinishedSubmittingForm(res.url);
                  this.props.setFormSubmitted(false);
                }
              );
            });
        }
      })
      .catch(err => {
        console.log(err);
        this.props.openRequestErrorSnackbar();
        this.props.setFormSubmitted(false);
        this.props.toggleSubmittingEditProfilePicForm(true);
      });
  };

  onSubmitFailure(errs, onSubmitError) {
    console.log(errs);
    console.log(onSubmitError);
    this.props.setFormSubmitted(false);
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div style={{ width: '100%' }}>
        <EditProfilePicForm
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

export default EditProfilePicFormContainer;