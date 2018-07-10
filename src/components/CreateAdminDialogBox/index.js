import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import { Icon } from 'antd';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import CreateAdminForm from '../../containers/CreateAdminForm';
import { AppContext } from '../../AppGlobalStateProvider';

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  saveDraftBtn: {
    marginRight: 'auto',
    color: theme.custom.submitBlue.main,
    '&:hover': {
      backgroundColor: theme.custom.submitBlue.transparentLightBackground,
    },
  },
});

@observer
class CreateAdminDialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formApi: null,
      formSubmitted: false,
    };
  }

  setFormSubmitted = (bool = true) => {
    this.setState({ formSubmitted: bool });
  };

  render() {
    const { fullScreen, classes, toggleCreateAdminModal, open } = this.props;

    return (
      <Dialog
        open={open}
        classes={{ paper: classes.paper }}
        fullScreen={fullScreen}
      >
        <DialogTitle
          id="form-dialog-title"
          classes={{ root: classes.formTitle }}
        >
          Add New Admin
        </DialogTitle>
        <Divider />
        <DialogContent
          classes={{ root: classes.dialogContent }}
          id="formDialog"
        >
          <AppContext.Consumer>
            {context => (
              <CreateAdminForm
                userUUID={this.props.userUUID}
                setFormSubmitted={this.setFormSubmitted}
                getFormApi={formApi => this.setState({ formApi })}
                createAdmin={context.UserStore.createAdmin}
                setAdminProfilePic={context.UserStore.setAdminProfilePic}
                confirmAdminCreated={this.props.confirmAdminCreated}
              />
            )}
          </AppContext.Consumer>
        </DialogContent>
        {!this.state.formSubmitted ? (
          <DialogActions classes={{ root: classes.dialogActions }}>
            <Button onClick={toggleCreateAdminModal} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => this.state.formApi.submitForm()}
              color="primary"
            >
              Submit
            </Button>
          </DialogActions>
        ) : null}
      </Dialog>
    );
  }
}

export default withMobileDialog()(withStyles(styles)(CreateAdminDialogBox));
