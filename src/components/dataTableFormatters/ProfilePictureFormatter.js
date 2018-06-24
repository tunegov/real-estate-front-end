import React from 'react';
import { withStyles } from 'material-ui/styles';
import { observer } from 'mobx-react';
import Tooltip from 'material-ui/Tooltip';
import LazyLoad from 'react-lazyload';
import { Link } from '../../routes';

const styles = theme => ({
  wrapper: {
    width: '38px',
    height: '38px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: '50%',
  },
  noImagePlaceholder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: '#000',
    color: '#fff',
  },
});

@observer
class ProfilePictureFormatter extends React.Component {
  componentDidMount() {
    if (this._imgItem) {
      this._imgItem.addEventListener('error', this.hideBrokenImage);
    }
  }

  componentWillUnmount() {
    if (this._imgItem) {
      this._imgItem.removeEventListener('error', this.hideBrokenImage);
    }
  }

  hideBrokenImage = () => {
    this._imgItem.style.visibility = 'hidden';
  };

  render() {
    const { id, imageAltText, imageURL } = this.props.value;
    const { classes } = this.props;

    if (!imageURL) {
      return (
        <Tooltip
          title="Click to view profile"
          enterDelay={400}
          leaveDelay={100}
        >
          <div className={classes.wrapper}>
            <Link route="agent" params={{ id }}>
              <a>
                <div className={classes.noImagePlaceholder}>?</div>
              </a>
            </Link>
          </div>
        </Tooltip>
      );
    }

    return (
      <Tooltip title="Click to view profile" enterDelay={400} leaveDelay={100}>
        <div className={classes.wrapper}>
          <Link route="agent" params={{ id }}>
            <a>
              <LazyLoad height={38} offset={100} once>
                <img
                  className={classes.image}
                  ref={imgItem => (this._imgItem = imgItem)}
                  src={imageURL}
                  alt={imageAltText || 'unable to load profile picture'}
                />
              </LazyLoad>
            </a>
          </Link>
        </div>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(ProfilePictureFormatter);
