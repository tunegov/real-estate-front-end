import React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import { Button } from 'antd';
import classnames from 'classnames';
import FullApplicationForm from '../ApplicationForm';
import CreditCheckApplicationForm from '../CreditCheckApplicationForm';

const ButtonGroup = Button.Group;

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
  applicationTypeBtnsWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  activePrimaryToggleBtn: {
    backgroundColor: '#1890ff !important',
    borderColor: '#1890ff !important',
    color: '#fff !important',
    '&:hover': {
      backgroundColor: '#1890ff',
      borderColor: '#1890ff',
      color: '#fff',
    },
  },
});

@withStyles(styles)
@observer
class Application extends React.Component {
  render() {
    const {
      onSubmit,
      classes,
      listingAgents,
      setFullApplication,
      setCreditCheckApplication,
      isFullApplication,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.titleSection}>Apply</div>
        <div className={classes.applicationTypeBtnsWrapper}>
          <ButtonGroup>
            <Button
              className={classnames(
                isFullApplication ? classes.activePrimaryToggleBtn : null
              )}
              onClick={setFullApplication}
            >
              Full Application
            </Button>
            <Button
              className={classnames(
                !isFullApplication ? classes.activePrimaryToggleBtn : null
              )}
              onClick={setCreditCheckApplication}
            >
              Credit Check Only
            </Button>
          </ButtonGroup>
        </div>
        <div className={classes.formWrapper}>
          {isFullApplication ? (
            <FullApplicationForm
              listingAgents={listingAgents}
              onSubmit={onSubmit}
            />
          ) : (
            <CreditCheckApplicationForm onSubmit={onSubmit} />
          )}
        </div>
      </div>
    );
  }
}

export default Application;
