import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Tooltip from 'material-ui/Tooltip';
import { darken } from 'polished';
import classNames from 'classnames';
import { Link } from '../../routes';

const styles = theme => ({
  root: {},
  agentBoxWrapper: {
    position: 'relative',
    display: 'flex',
    padding: '5px 25px',
    alignItems: 'center',
    height: '120px',
    boxShadow: theme.shadows[1],
    backgroundColor: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  /*
  sales: {
    background: 'linear-gradient(45deg, #9e1f1f 0%,#c11f1f 14%,#ffffff 14%,#ffffff 100%)',
    [theme.breakpoints.only('sm')]: {
      background: 'linear-gradient(45deg, #9e1f1f 0%,#c11f1f 13%,#ffffff 13%,#ffffff 100%)',
    },
  },
  other: {
    background: `linear-gradient(45deg, ${darken(0.1, '#9e1f1f')} 0%, ${darken(0.1, '#c11f1f')} 14%,#ffffff 14%,#ffffff 100%)`,
    [theme.breakpoints.only('sm')]: {
      background: `linear-gradient(45deg, ${darken(0.1, '#9e1f1f')} 0%, ${darken(0.1, '#c11f1f')} 13%,#ffffff 13%,#ffffff 100%)`,
    },
  },
  */
  profilePhotoWrapper: {
    position: 'absolute',
    height: '60%',
  },
  image: {
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: '50%',
  },
  infoWrapper: {
    marginLeft: '70px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 10px',
    width: '100%',
    height: '80%',
  },
  AgentOfTheMonthType: {
    fontSize: '.85rem',
    fontWeight: 500,
    color: 'rgba(0,0,0,.7)',
  },
  agentName: {
    fontSize: '20px',
    fontWeight: 300,
  },
  agentAwardTitle: {
    marginBottom: '10px',
    fontSize: '14px',
    fontWeight: 300,
    fontStyle: 'italic',
    color: theme.palette.secondary.dark,
  },
  stat: {
    fontSize: '14px',
    fontWeight: 300,
    color: 'rgba(0,0,0,.7)',
  },
  label: {
    position: 'absolute',
    top: '-5px',
    right: '5px',
    padding: '5px 8px',
    backgroundColor: 'rgba(0,0,0,.8)',
    fontSize: '10px',
    borderRadius: '10px',
    color: '#fff',
  },
  contentWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    overflow: 'auto',
  },
});

@observer
class AgentOfTheMonth extends Component {
  render() {
    const {
      classes,
      residentialDollarsAgent,
      commercialDollarsAgent,
      rentalsDollarsAgent,
      numbersAgent,
    } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <Link route={residentialDollarsAgent.profileURL || '#'}>
              <div
                className={classNames(classes.agentBoxWrapper, classes.sales)}
              >
                <span className={classes.label}>Agent of the Quarter</span>

                <div className={classes.contentWrapper}>
                  <div className={classes.profilePhotoWrapper}>
                    <img
                      className={classes.image}
                      src={residentialDollarsAgent.photoURL}
                      alt={residentialDollarsAgent.name}
                    />
                  </div>

                  <div className={classes.infoWrapper}>
                    <div className={classes.agentName}>
                      {residentialDollarsAgent.name}
                    </div>
                    <div className={classes.agentAwardTitle}>
                      - Gross Residential Sales
                    </div>
                    <div className={classes.stat}>
                      Seles: ${residentialDollarsAgent.statItem.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
            <Tooltip
              title="Click to view profile"
              enterDelay={300}
              leaveDelay={100}
              id="tooltip-commercialDollarsAgent"
            >
              <Link route={commercialDollarsAgent.profileURL || '#'}>
                <div
                  className={classNames(classes.agentBoxWrapper, classes.sales)}
                >
                  <span className={classes.label}>Agent of the Quarter</span>

                  <div className={classes.contentWrapper}>
                    <div className={classes.profilePhotoWrapper}>
                      <img
                        className={classes.image}
                        src={commercialDollarsAgent.photoURL}
                        alt={commercialDollarsAgent.name}
                      />
                    </div>

                    <div className={classes.infoWrapper}>
                      <div className={classes.agentName}>
                        {commercialDollarsAgent.name}
                      </div>
                      <div className={classes.agentAwardTitle}>
                        - Gross Commercial Sales
                      </div>
                      <div className={classes.stat}>
                        Sales: ${commercialDollarsAgent.statItem.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Tooltip>
          </Grid>

          <Grid item xs={12} md={6}>
            <Tooltip
              title="Click to view profile"
              enterDelay={300}
              leaveDelay={100}
              id="tooltip-residentialDollarsAgent"
            >
              <Link route={rentalsDollarsAgent.profileURL || '#'}>
                <div
                  className={classNames(classes.agentBoxWrapper, classes.other)}
                >
                  <span className={classes.label}>Agent of the Quarter</span>

                  <div className={classes.contentWrapper}>
                    <div className={classes.profilePhotoWrapper}>
                      <img
                        className={classes.image}
                        src={rentalsDollarsAgent.photoURL}
                        alt={rentalsDollarsAgent.name}
                      />
                    </div>

                    <div className={classes.infoWrapper}>
                      <div className={classes.agentName}>
                        {rentalsDollarsAgent.name}
                      </div>
                      <div className={classes.agentAwardTitle}>
                        - Gross Rentals Amount
                      </div>
                      <div className={classes.stat}>
                        Amount: ${rentalsDollarsAgent.statItem.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Tooltip>
          </Grid>

          <Grid item xs={12} md={6}>
            <Tooltip
              title="Click to view profile"
              enterDelay={300}
              leaveDelay={100}
              id="tooltip-commercialNumbersAgent"
            >
              <Link route={numbersAgent.profileURL || '#'}>
                <div
                  className={classNames(classes.agentBoxWrapper, classes.other)}
                >
                  <span className={classes.label}>Agent of the Quarter</span>

                  <div className={classes.contentWrapper}>
                    <div className={classes.profilePhotoWrapper}>
                      <img
                        className={classes.image}
                        src={numbersAgent.photoURL}
                        alt={numbersAgent.name}
                      />
                    </div>

                    <div className={classes.infoWrapper}>
                      <div className={classes.agentName}>
                        {numbersAgent.name}
                      </div>
                      <div className={classes.agentAwardTitle}>
                        - Total Deals
                      </div>
                      <div className={classes.stat}>
                        Deals: {numbersAgent.statItem.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Tooltip>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AgentOfTheMonth);
