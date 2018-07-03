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
import {
  agent as agentRole,
  admin,
  superAdmin,
} from '../../constants/userTypes';
import TextareaAutosize from 'react-textarea-autosize';
import {
  FaFacebook,
  FaTwitter,
  FaCopy,
  FaPencil,
  FaClose,
  FaCheck,
} from 'react-icons/lib/fa';
import { capitalize } from '../../utils/stringUtils';
import CustomInputMask from '../CustomInputMask';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    backgroundColor: '#fff',
    padding: '20px 20px',
    borderRadius: '10px',
    color: 'rgba(0,0,0,.8)',
    boxShadow: theme.shadows[1],
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  leftColumnWrapper: {
    marginRight: '40px',
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  rightColumnWrapper: {
    width: '100%',
    [theme.breakpoints.only('sm')]: {
      width: '65%',
    },
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
    position: 'relative',
    paddingTop: '100%',
    marginBottom: '25px',
    width: '325px',
    height: '325px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  profilePic: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    background: 'linear-gradient(45deg, #45484d 0%,#000000 100%)',
  },
  profilePicSubstitute: {
    position: 'relative',
    paddingTop: '100%',
    width: '100%',
    background: 'linear-gradient(45deg, #45484d 0%,#000000 100%)',
    color: '#fff',
  },
  profilePicSubstituteText: {
    positon: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
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
    backgroundColor: '#008205',
    boxShadow: theme.shadows[2],
    zIndex: '2',
    cursor: 'pointer',
    outline: 'none',
    transition: 'transform .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1,1.1)',
    },
  },
  editProfilePicBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '34px',
    width: '34px',
    border: 'none',
    borderRadius: '50%',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#646d64',
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
    padding: '5px',
    fontWeight: '300',
    color: 'rgba(0,0,0,.8)',
    fontSize: '.8rem',
    borderRadius: '3px',
    borderColor: 'rgba(0,0,0,.1)',
    boxShadow: `inset ${theme.shadows[1]}`,
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

  returnTitle = role => {
    switch (role) {
      case agentRole:
        return 'Licensed Real Estate Salesperson';
        break;
      case admin:
        return 'Admin';
        break;
      case superAdmin:
        return 'Super-Admin';
        break;
      default:
        return '';
    }
  };

  renderEditBtns = () => {
    const {
      currentUserUUID,
      currentUserRole,
      uuid,
      isEditing,
      enterEditingMode,
      cancelEditingMode,
      classes,
      saveUser,
    } = this.props;
    const canEdit =
      currentUserUUID === uuid ||
      currentUserRole === admin ||
      currentUserRole === superAdmin;

    console.log(currentUserRole);

    if (!canEdit) return null;

    if (isEditing) {
      return (
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
      );
    } else {
      return (
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
      );
    }
  };

  render() {
    const {
      agent,
      classes,
      enterEditingMode,
      cancelEditingMode,
      isEditing,
      setDescription,
      setMobileNumber,
      saveUser,
      undoSave,
      openProfilePicEditor,
      uuid,
      currentUserRole,
      currentUserUUID,
    } = this.props;
    const {
      firstName,
      lastName,
      email,
      role,
      agent: {
        profileDescription,
        mobileNumber,
        officeNumber,
        branch,
        profilePicURL,
      },
    } = agent;

    const name = capitalize(`${firstName} ${lastName}`);

    const canEdit =
      currentUserUUID === uuid ||
      currentUserRole === admin ||
      currentUserRole === superAdmin;

    return (
      <div className={classes.root}>
        {this.renderEditBtns()}
        <div className={classes.leftColumnWrapper}>
          <div className={classes.profilePicWrapper}>
            {profilePicURL ? (
              <img
                id="agentProfilePic"
                className={classes.profilePic}
                src={profilePicURL}
                alt="Agent"
              />
            ) : (
              <div className={classes.profilePicSubstitute}>
                <div className={classes.profilePicSubstituteText}>
                  No profile photo available
                </div>
              </div>
            )}

            {isEditing &&
              (currentUserRole === admin || currentUserRole === superAdmin) && (
                <span className={classes.editBtnsWrapper}>
                  <button
                    className={classes.editProfilePicBtn}
                    onClick={openProfilePicEditor}
                  >
                    <FaPencil />
                  </button>
                </span>
              )}
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
                <CustomInputMask
                  mask="(999) 999-9999"
                  maskChar={null}
                  placeholder="Phone Number"
                  onChange={setMobileNumber}
                  defaultValue={mobileNumber}
                >
                  {props => (
                    <input
                      className={classes.detailsInfoInput}
                      placeholder="Your mobile numer..."
                      type="tel"
                      {...props}
                    />
                  )}
                </CustomInputMask>
              ) : (
                <div className={classes.detailsInfo}>{mobileNumber}</div>
              )}
            </div>
            <div className={classNames(classes.region, classes.details)}>
              <div className={classes.detailsTitle}>Branch</div>
              <div className={classes.detailsInfo}>{branch}</div>
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
            <small className={classes.title}>{this.returnTitle(role)}</small>
            <div className={classes.descriptionWrapper}>
              <div className={classes.descriptionTitle}>
                About {name.split(' ')[0]}
              </div>
              {isEditing ? (
                <TextareaAutosize
                  className={classes.descriptionDetailsInput}
                  defaultValue={profileDescription}
                  spellCheck
                  controls={false}
                  onChange={({ target }) => setDescription(target.value)}
                />
              ) : (
                <FormattedText className={classes.descriptionDetails}>
                  {profileDescription || 'No description available yet...'}
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
