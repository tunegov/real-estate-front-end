import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import SubmitDealForm from '../../containers/SubmitDealForm';

const styles = theme => ({
  paper: {
    width: '800px',
    maxWidth: '800px',
  },
  dialogActions: {
    margin: '8px 0',
  },
  formTitle: {
    padding: 'theme.spacing.unit theme.spacing.unit * 3',
    textAlign: 'center',
  },
  formSubheader: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 6,
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  dialogContent: {
    paddingTop: '32px',
  },
});

@observer
class SubmitDealDialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formApi: null,
    };
  }
  render() {
    const {
      fullScreen,
      classes,
      toggleDialogBoxOpen,
      submitDealDialogOpen,
    } = this.props;

    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={submitDealDialogOpen}
        classes={{ paper: classes.paper }}
        fullScreen={fullScreen}
      >
        <DialogTitle id="form-dialog-title" classes={{ root: classes.formTitle }}>
          New Deal
        </DialogTitle>
        <Divider />
        <DialogContent classes={{ root: classes.dialogContent }}>
          <SubmitDealForm userUUID={this.props.userUUID} getFormApi={formApi => this.setState({ formApi })} />
        </DialogContent>
        <DialogActions classes={{ root: classes.dialogActions }}>
          <Button onClick={toggleDialogBoxOpen} color="primary">
            Cancel
          </Button>
          <Button onClick={() => this.state.formApi.submitForm()} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withMobileDialog()(withStyles(styles)(SubmitDealDialogBox));
