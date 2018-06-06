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
import Tooltip from 'material-ui/Tooltip';
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
    padding: '40px 20px 20px 20px',
    color: 'rgba(0,0,0,.8)',
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
      tooltipOpen: false,
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

  onFacebookShareClick = e => {
    if (e.preventDefault) e.preventDefault();

    const URL = encodeURI(`${window.location.href}`);

    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;

    const width = windowInnerWidth < 550 ? windowInnerWidth * 0.9 : 550;
    const height = windowInnerHeight < 450 ? windowInnerHeight * 0.7 : 450;

    const halfHeight = height / 2;
    const halfWidth = width / 2;

    const left = windowInnerWidth / 2 - halfWidth;
    const top = windowInnerHeight / 2 - halfHeight;

    const href = `https://www.facebook.com/sharer/sharer.php?u=${URL}`;
    window.open(
      href,
      'Facebook',
      `height=${height},width=${width},resizable=1,top=${top},left=${left},scrollbars=yes`
    );
  };

  onTwitterShareClick = e => {
    if (e.preventDefault) e.preventDefault();

    const text = 'I found a great new real estate listing!';
    const finalText = encodeURI(text);
    const hashTags = encodeURI(
      `real estate,listing,${this.props.neighborhood},home`
    );
    const URL = encodeURI(`${window.location.href}`);

    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;

    const width = windowInnerWidth < 550 ? windowInnerWidth * 0.9 : 550;
    const height = windowInnerHeight < 450 ? windowInnerHeight * 0.7 : 450;

    const halfHeight = height / 2;
    const halfWidth = width / 2;

    const left = windowInnerWidth / 2 - halfWidth;
    const top = windowInnerHeight / 2 - halfHeight;

    const href = `https://twitter.com/intent/tweet/?text=${finalText}&url=${URL}&hashtags=${hashTags}`;
    window.open(
      href,
      'Facebook',
      `height=${height},width=${width},resizable=1,top=${top},left=${left},scrollbars=yes`
    );
  };

  onCopyToClipboard = e => {
    if (e.preventDefault) e.preventDefault();
    const URL = `${window.location.href}`;

    const el = document.createElement('textarea');
    el.value = URL;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.handleTooltipOpen();
  };

  handleTooltipClose = () => {
    if (this.state.tooltipOpen) this.setState({ tooltipOpen: false });
  };

  handleTooltipOpen = () => {
    this.setState({ tooltipOpen: true });
    setTimeout(() => {
      if (this.state.tooltipOpen) this.setState({ tooltipOpen: false });
    }, 3000);
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

            <div className={classes.socialMediaWrapper}>
              <div className={classes.socialMediaTitle}>Share:</div>
              <div className={classes.socialMediaItemsWrapper}>
                <button
                  onClick={this.onFacebookShareClick}
                  className={classes.socialMediaItemWrapper}
                >
                  <FaFacebook />
                </button>
                <button
                  onClick={this.onTwitterShareClick}
                  className={classes.socialMediaItemWrapper}
                >
                  <FaTwitter />
                </button>
                <Tooltip
                  title="Copied!"
                  id="tooltip-copy"
                  open={this.state.tooltipOpen}
                  enterDelay={100}
                  leaveDelay={100}
                  placement="top"
                >
                  <button
                    onClick={this.onCopyToClipboard}
                    className={classes.socialMediaItemWrapper}
                  >
                    <FaCopy />
                  </button>
                </Tooltip>
              </div>
            </div>
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
              <FormattedText className={classes.descriptionDetails}>
                {description}
              </FormattedText>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
