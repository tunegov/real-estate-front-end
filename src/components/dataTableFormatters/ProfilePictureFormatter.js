import React from 'react';
import { withStyles } from 'material-ui/styles';
import { observer } from 'mobx-react';
import Tooltip from 'material-ui/Tooltip';
import { Link } from '../../routes';

const styles = theme => ({
  wrapper: {
    width: '90%',
    height: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
  },
  image: {
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    cursor: 'pointer',
  },
});

@observer
class ProfilePictureFormatter extends React.Component {
  componentDidMount() {
    this._imgItem.addEventListener('error', this.hideBrokenImage);
  }

  componentWillUnmount() {
    this._imgItem.removeEventListener('error', this.hideBrokenImage);
  }

  hideBrokenImage = () => {
    this._imgItem.style.visibility = 'hidden';
  }

  render() {
    const { profileURL, imageAltText, imageURL } = this.props.value;
    const { classes } = this.props;

    return (
      <Tooltip
        title="Click to view profile"
        enterDelay={400}
        leaveDelay={100}
      >
        <div className={classes.wrapper}>
          <Link route={profileURL || '#'}>
            <img
              className={classes.image}
              ref={imgItem => this._imgItem = imgItem}
              src={imageURL}
              alt={imageAltText || 'unable to laod profile picture'}
            />
          </Link>
        </div>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(ProfilePictureFormatter);
