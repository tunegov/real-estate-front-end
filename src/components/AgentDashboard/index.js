import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import withSizes from 'react-sizes';
import Chance from 'chance';
import DollarIcon from '@material-ui/icons/AttachMoney';
import PendingIcon from '@material-ui/icons/Help';
import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from 'moment';
import classNames from 'classnames';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import StatNumberBox from '../StatNumberBox';
import AgentOfTheMonthContainer from '../../containers/AgentOfTheMonth';

const chance = new Chance();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const styles = theme => ({
  root: {
    maxWidth: '100%',
  },
  heading: {
    fontSize: '.94rem',
    fontWeight: 500,
    color: 'rgba(0,0,0,.7)',
  },
  statNumberBoxWrapper: {
    backgroundColor: '#fff',
    height: '175px',
  },
  statBoxQuestionIcon: {
    fontSize: '40px',
    color: '#F57C00',
  },
  statBoxMoneyIcon: {
    fontSize: '40px',
    color: '#388E3C',
  },
  statBoxStarIcon: {
    fontSize: '40px',
    color: '#1976D2',
  },
  agentOfTheMonthWrapper: {
    paddingTop: '20px',
    height: '320px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: theme.shadows[1],
    overflow: 'auto',
  },
  companyNewsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    // paddingTop: '20px',
    // height: '256px',
    // backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: theme.shadows[1],
  },
  boxTitleWrapper: {
    width: '100%',
    paddingLeft: '24px',
    paddingRight: '24px',
    display: 'flex',
    alignItems: 'center',
    height: '35px',
    fontSize: '.94rem',
    fontWeight: 500,
    color: 'rgba(0,0,0,.7)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  agentOfTheMonthContent: {
    // padding: '24px',
  },
  companyNewsPlaceHolder: {
    display: 'flex',
    marginTop: '15px',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    // backgroundColor: 'rgba(0,0,0,.8)',
    color: 'rgba(0,0,0,.7)',
    borderRadius: '0 0 5px 5px',
  },
});

const mapSizesToProps = ({ width }) => ({
  xsViewport: width < 412,
  smViewport: width < 600,
  mdViewport: width < 960,
  lgViewport: width < 1280,
});

@observer
@withSizes(mapSizesToProps)
class AgentDashboard extends Component {
  renderCompanyNews = () => {
    const { newsItems, classes } = this.props;
    if (newsItems && newsItems.length) {
      return (
        <List></List>
      );
    }
    return (
      <div className={classes.companyNewsPlaceHolder}>No news currently available...</div>
    );
  }

  render() {
    const { classes, userUUID, newsItems } = this.props;
    const currentDate = moment();
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          {/*
            <Grid item xs={12}>
            <div>Company Alerts</div>
          </Grid>
          */}
          <Grid item xs={12} lg={8}>
            <div className={classes.agentOfTheMonthContent}>
              <AgentOfTheMonthContainer userUUID={userUUID} />
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className={classNames(classes.companyNewsWrapper)}>
              <ExpansionPanel defaultExpanded={newsItems && newsItems.length}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Company News</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {this.renderCompanyNews()}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </Grid>
          <Grid item xs={12}><Divider /></Grid>

          <Grid item xs={12}>
            <div className={classes.expansionPanelWrapper}>
              <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Personal Stats</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Grid container spacing={16}>
                    <Grid item xs={12} sm={6}>
                      <StatNumberBox
                        rootClassName={classes.statNumberBoxWrapper}
                        icon={DollarIcon}
                        iconClass={classes.statBoxMoneyIcon}
                        stat={'$28,579,790' || '$0'}
                        statTitle="Total Net Commissions to Date"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StatNumberBox
                        rootClassName={classes.statNumberBoxWrapper}
                        icon={DollarIcon}
                        iconClass={classes.statBoxMoneyIcon}
                        stat={'$1,579,790' || '$0'}
                        statTitle={`${months[currentDate.month()]} - Net Commissions`}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StatNumberBox
                        rootClassName={classes.statNumberBoxWrapper}
                        icon={StarIcon}
                        iconClass={classes.statBoxStarIcon}
                        stat={'7' || '$0'}
                        statTitle={`${months[currentDate.month()]} - Number of Deals`}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StatNumberBox
                        rootClassName={classes.statNumberBoxWrapper}
                        icon={PendingIcon}
                        iconClass={classes.statBoxQuestionIcon}
                        stat={'4' || '0'}
                        statTitle="Number of Pending Deals"
                      />
                    </Grid>
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </Grid>

        </Grid>

      </div>
    );
  }
}

export default withStyles(styles)(AgentDashboard);
