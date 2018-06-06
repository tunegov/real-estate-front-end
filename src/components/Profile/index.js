import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import FormattedText from 'buildo-react-components/lib/FormattedText';
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Input from 'buildo-react-components/lib/Input';
import TextareaAutosize from 'react-textarea-autosize';
import {
  FaFacebook,
  FaTwitter,
  FaCopy,
  FaPencil,
  FaClose,
  FaCheck,
} from 'react-icons/lib/fa';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    backgroundColor: '#fff',
    padding: '20px 20px',
    borderRadius: '10px',
    color: 'rgba(0,0,0,.8)',
    boxShadow: theme.shadows[1],
  },
  leftColumnWrapper: {
    marginRight: '40px',
  },
  rightColumnWrapper: {
    width: '100%',
  },
  name: {
    marginBottom: '5px',
  },
  title: {
    color: 'rgba(0,0,0,.7)',
    display: 'block',
    marginBottom: '30px',
  },
  profilePicWrapper: {
    marginBottom: '25px',
    width: '325px',
    height: '400px',
  },
  profilePic: {
    width: '100%',
    display: 'block',
    objectFit: 'cover',
  },
  detailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1.1rem',
  },
  details: {
    display: 'flex',
    width: '100%',
    textAlign: 'center',
    marginBottom: '5px',
  },
  detailsTitle: {
    display: 'inline-block',
    fontWeight: '500',
    marginBottom: '8px',
  },
  detailsInfo: {
    marginLeft: 'auto',
    fontWeight: '300',
  },
  descriptionWrapper: {
    '& > span': {
      lineHeight: '1.4rem',
    },
  },
  descriptionTitle: {
    fontSize: '1.1rem',
    fontWeight: '500',
    marginBottom: '10px',
  },
  socialMediaWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  socialMediaTitle: {
    fontSize: '1.1rem',
    fontWeight: '500',
    alignText: 'center',
  },
  socialMediaItemsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
    width: '100%',
  },
  socialMediaItemWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '55px',
    height: '55px',
    border: '1px solid rgba(0,0,0,.3)',
    borderColor: 'rgba(0,0,0,.3)',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '22px',
    color: 'rgba(0,0,0,.7)',
    transition: 'border-color .2s ease-in-out, color .2s ease-in-out',
    '&:hover': {
      borderColor: 'rgba(0,0,0,.9)',
      color: 'rgba(0,0,0,.8)',
    },
  },
  editBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '34px',
    width: '34px',
    border: 'none',
    borderRadius: '50%',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    boxShadow: theme.shadows[2],
    zIndex: '2',
    cursor: 'pointer',
    outline: 'none',
    transition: 'transform .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1,1.1)',
    },
  },
  editBtnsWrapper: {
    display: 'flex',
    position: 'absolute',
    top: '-13px',
    right: '-13px',
  },
  cancelBtn: {
    backgroundColor: theme.palette.secondary.main,
    marginRight: '8px',
  },
  saveBtn: {
    backgroundColor: '#4CAF50',
  },
  descriptionDetailsInput: {
    padding: '10px',
    width: '100%',
    fontSize: '1rem',
    color: 'rgba(0,0,0,.8)',
    borderRadius: '3px',
    lineHeight: '1.4rem',
    borderColor: 'rgba(0,0,0,.1)',
    boxShadow: `inset ${theme.shadows[1]}`,
  },
  detailsInfoInput: {
    padding: '0',
    marginLeft: 'auto',
    '& input': {
      padding: '5px',
      fontWeight: '300',
      color: 'rgba(0,0,0,.8)',
      fontSize: '.8rem',
      borderRadius: '3px',
      borderColor: 'rgba(0,0,0,.1)',
      boxShadow: `inset ${theme.shadows[1]}`,
    },
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  snackBar: {
    transform: 'translate(0px, -25px)',
  },
});

@withStyles(styles)
@observer
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      Transition: null,
    };
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const {
      user,
      classes,
      enterEditingMode,
      cancelEditingMode,
      isEditing,
      setDescription,
      setMobileNumber,
      saveUser,
      undoSave,
    } = this.props;
    const {
      profilePhotoURL,
      name,
      email,
      title,
      description,
      mobileNumber,
      officeNumber,
      region,
    } = user;

    return (
      <div className={classes.root}>
        {isEditing ? (
          <span className={classes.editBtnsWrapper}>
            <button
              className={classNames(classes.editBtn, classes.cancelBtn)}
              onClick={cancelEditingMode}
            >
              <FaClose />
            </button>
            <button
              className={classNames(classes.editBtn, classes.saveBtn)}
              onClick={() => {
                saveUser();
                this.handleClick();
              }}
            >
              <FaCheck />
            </button>
          </span>
        ) : (
          <span className={classes.editBtnsWrapper}>
            <button
              className={classes.editBtn}
              onClick={() => {
                this.setState({ open: false });
                enterEditingMode();
              }}
            >
              <FaPencil />
            </button>
          </span>
        )}
        <div className={classes.leftColumnWrapper}>
          <div className={classes.profilePicWrapper}>
            <img
              className={classes.profilePic}
              src={profilePhotoURL}
              alt="Agent"
            />
          </div>

          <div className={classes.detailsWrapper}>
            <div className={classNames(classes.email, classes.details)}>
              <div className={classes.detailsTitle}>Email</div>
              <div className={classes.detailsInfo}>{email}</div>
            </div>
            <div className={classNames(classes.mobile, classes.details)}>
              <div className={classes.detailsTitle}>Office</div>
              <div className={classes.detailsInfo}>{officeNumber}</div>
            </div>
            <div className={classNames(classes.mobile, classes.details)}>
              <div className={classes.detailsTitle}>Mobile</div>
              {isEditing ? (
                <Input
                  className={classes.detailsInfoInput}
                  placeholder="Your mobile numer..."
                  defaultValue={mobileNumber}
                  onChange={setMobileNumber}
                />
              ) : (
                <div className={classes.detailsInfo}>{mobileNumber}</div>
              )}
            </div>
            <div className={classNames(classes.region, classes.details)}>
              <div className={classes.detailsTitle}>Region</div>
              <div className={classes.detailsInfo}>{region}</div>
            </div>

            {/*<div className={classes.socialMediaWrapper}>
              <div className={classes.socialMediaTitle}>Share:</div>
              <div className={classes.socialMediaItemsWrapper}>
              <button className={classes.socialMediaItemWrapper}>
                <FaFacebook />
              </button>
              <button className={classes.socialMediaItemWrapper}>
                <FaTwitter />
              </button>
              <button className={classes.socialMediaItemWrapper}>
                <FaCopy />
              </button>
              </div>
            </div>*/}
          </div>
        </div>
        <div className={classes.rightColumnWrapper}>
          <div>
            <h1 className={classes.name}>{name}</h1>
            <small className={classes.title}>{title}</small>
            <div className={classes.descriptionWrapper}>
              <div className={classes.descriptionTitle}>
                About {name.split(' ')[0]}
              </div>
              {isEditing ? (
                <TextareaAutosize
                  className={classes.descriptionDetailsInput}
                  defaultValue={description}
                  spellCheck
                  controls={false}
                  onChange={({ target }) => setDescription(target.value)}
                />
              ) : (
                <FormattedText className={classes.descriptionDetails}>
                  {description}
                </FormattedText>
              )}
            </div>
          </div>
        </div>

        <Snackbar
          classes={{ root: classes.snackBar }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={isEditing ? false : this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Profile saved</span>}
          action={[
            <Button
              key="undo"
              color="secondary"
              size="small"
              onClick={() => {
                this.handleClose();
                undoSave();
              }}
            >
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

export default Profile;
