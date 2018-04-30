import React, { Component } from 'react';
import { Form } from 'react-form';
import uuid from 'uuid/v4';
import AvatarEditor from 'react-avatar-editor';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import withSizes from 'react-sizes';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Slider from '../../CustomSlider';
import validators from './formValidation';
import CustomFileUploadInputBtn from '../../CustomFileUploadInputWrapper';
import MaterialCustomTextFieldWrapper from '../../MaterialCustomTextFieldWrapper';

const CustomTextField = MaterialCustomTextFieldWrapper;

const acceptedFileExtensions = ['jpg', 'jpeg'];

const mapSizesToProps = ({ width }) => ({
  smViewport: width < 600,
  mdViewport: width < 960,
  lgViewport: width < 1280,
});

const styles = theme => ({
  root: {
    padding: '30px 40px',
    [theme.breakpoints.down('md')]: {
      padding: '30px 0',
    },
    backgroundColor: '#fff',
  },
  formControlWrapper: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  uploadBtnClassName: {
    display: 'inline-block',
    marginTop: '20px',
    color: '#fff',
    backgroundColor: '#272A2E',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    padding: '8px 16px',
    minWidth: '88px',
    fontSize: '0.875rem',
    boxSizing: 'border-box',
    minHeight: '36px',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    lineHeight: '1.4em',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '500',
    borderRadius: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#000',
    },
  },
  profileItemsWrapper: {
    //display: 'inline-block',
    textAlign: 'center',
  },
  sliderWrapper: {
    width: '100%',
  },
  formSubheading: {
    width: '100%',
    textAlign: 'center',
    paddingLeft: '16px',
    paddingTop: '82px',
  },
  h3: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  formMiniHeading: {
    width: '100%',
    textAlign: 'left',
    paddingLeft: '28px',
  },
  formMiniHeading2: {
    width: '100%',
    textAlign: 'left',
    paddingLeft: '28px',
    marginTop: '60px',
  },
  sliderRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'rgba(0,0,0,.6)',
    marginTop: '15px',
    fontFamily: theme.typography.fontFamily,
  },
  sliderInput: {
    appearance: 'none',
    width: '30%',
    height: '3px',
    background: '#d3d3d3',
    outline: 'none',
    opacity: '0.7',
    transition: 'opacity .2s',
    borderRadius: '50px',
    cursor: 'grab',
    '&:hover': {
      opacity: '1',
    },
    [theme.breakpoints.down('xs')]: {
      width: '50%',
    },
  },
  sliderLabel: {
    marginBottom: '5px',
    marginRight: 'none',
  },
});

@withSizes(mapSizesToProps)
class CreateAgentForm extends Component {
  render() {
    const {
      classes,
      setImageFile,
      imageFile,
      lgViewport,
      setImageScale,
      imageScale,
      adjustedImageScale,
      clearImageFile,
      getFileUploadInput,
      getProfilePicEditor,
    } = this.props;

    return (
      <div className={classes.root}>
        <Form
          preValidate={this.preValidate}
          onSubmit={this.props.onSubmit}
          onSubmitFailure={this.props.onSubmitFailure}
          validate={validators}
          getApi={formApi => {
            this.props.getFormApi(formApi);
          }}
        >
          {formApi => {
            return (
              <form onSubmit={formApi.submitForm} id="form1" classes={classes.formRoot}>
                <Grid container>
                  <Grid item xs={12}>
                    <div className={classes.profileItemsWrapper}>
                      {imageFile ?
                        <AvatarEditor
                          ref={getProfilePicEditor}
                          image={imageFile || null}
                          width={lgViewport ? 200 : 250}
                          height={lgViewport ? 200 : 250}
                          border={50}
                          color={[0, 0, 0, 0.3]}
                          scale={adjustedImageScale || 1.2}
                          rotate={0}
                          style={{
                            boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                          }}
                        /> : null}
                      {
                        imageFile ?
                          <div className={classes.sliderWrapper}>
                            <Slider
                              value={imageScale}
                              min={0}
                              max={100}
                              onChange={value => setImageScale(value)}
                              label="Scale:"
                              rootClassName={classes.sliderRoot}
                              labelClassName={classes.sliderLabel}
                              inputClassName={classes.sliderInput}
                            />
                          </div> :
                          null
                      }
                      <div>
                        <CustomFileUploadInputBtn
                          field="profilePicture"
                          id={uuid()}
                          label="Upload Agent's Profile Picture"
                          btnClassName={classes.uploadBtnClassName}
                          required
                          customOnChange={setImageFile}
                          customState={imageFile}
                          helperInfo="Agent's Profile (JPEG/JPG file)"
                          acceptedFileExtensions={acceptedFileExtensions}
                          getInput={getFileUploadInput}
                        />
                        {
                          imageFile ?
                            <Button
                              classes={{ root: classes.removePaymentBtn }}
                              variant="raised"
                              color="secondary"
                              onClick={() => clearImageFile()}
                              type="button"
                            >
                              Clear File
                            </Button> :
                            null
                        }
                      </div>
                    </div>
                  </Grid>

                  <div className={classes.formSubheading}>
                    <Typography variant="subheading" classes={{ subheading: classes.h3 }}>Basic Information</Typography>
                  </div>

                  <Grid item xs={12} md={6}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="firstName"
                        id={uuid()}
                        label="First Name"
                        fullWidth
                        required
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="lastName"
                        id={uuid()}
                        label="Last Name"
                        fullWidth
                        required
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="role"
                        id={uuid()}
                        label="Role"
                        fullWidth
                        required
                      />
                    </div>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="realEstateLicenseNumber"
                        id={uuid()}
                        label="Real Estate License#"
                        fullWidth
                        required
                      />
                    </div>
                  </Grid>

                  <div className={classes.formSubheading}>
                    <Typography variant="subheading" classes={{ subheading: classes.h3 }}>Contact Information</Typography>
                  </div>

                  <Grid item xs={12} md={6}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="officeNumber"
                        id={uuid()}
                        label="Office Number"
                        fullWidth
                        required
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="mobileNumber"
                        id={uuid()}
                        label="Mobile Number"
                        fullWidth
                        required
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classes.formControlWrapper}>
                      <CustomTextField
                        field="email"
                        id={uuid()}
                        label="Email"
                        fullWidth
                        required
                      />
                    </div>
                  </Grid>
                </Grid>
              </form>
            );
          }}
        </Form>
      </div>
    );
  }
}

export default withStyles(styles)(CreateAgentForm);
