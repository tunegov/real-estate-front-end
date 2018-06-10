import React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import ApplicationForm from '../ApplicationForm';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: '100%',
    marginBottom: '50px',
    fontFamily: theme.frontEnd.typography.fontFamily.sansSerif,
    fontSize: '2.8rem',
    color: '#fff',
    backgroundColor: 'black',
  },
  formWrapper: {
    padding: '20px 20px',
  },
});

@withStyles(styles)
@observer
class Application extends React.Component {
  render() {
    const { onSubmit, classes, listingAgents } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.titleSection}>Apply</div>
        <div className={classes.formWrapper}>
          <ApplicationForm listingAgents={listingAgents} />
        </div>
      </div>
    );
  }
}

export default Application;
