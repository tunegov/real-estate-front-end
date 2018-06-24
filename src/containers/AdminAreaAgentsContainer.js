import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { observer } from 'mobx-react';
import moment from 'moment';
import isBrowser from 'is-browser';
import Grid from 'material-ui/Grid';
import { DatePicker } from 'material-ui-pickers';
import TextField from 'material-ui/TextField';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { DotLoader } from 'react-spinners';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CreateAgentDialogBox from '../components/CreateAgentDialogBox';
import MaterialCustomSelectInput from '../components/MaterialCustomSelectInput';
import AdminAreaAgentsTableContainer from './AdminAreaAgentsTableContainer';

const Loader = DotLoader;

const agentsQuery = gql`
  query agents {
    agents {
      uuid
      firstName
      lastName
      email
      role
      agent {
        profilePicURL
        branch
        state
        mobileNumber
        officeNumber
        realEstateLicenseNumber
      }
    }
  }
`;

const styles = theme => ({
  addDealBtn: {},
  dealsSummaryBtn: {
    backgroundColor: '#2995F3',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#2380D1',
    },
  },
  wrapper: {
    position: 'relative',
  },
  buttonsWrapper: {
    display: 'flex',
    marginBottom: '25px',
    justifyContent: 'center',
  },
  tableFormWrapper: {
    width: '100%',
    zIndex: 2,
    marginBottom: '20px',
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginBottom: '20px',
  }),
  formControlWrapper: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  formControlWrapperCenter: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    textAlign: 'center',
  },
  submitBtnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  submitBtnWrapper2: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2px',
  },
  searchBoxHeader: {
    marginBottom: '20px',
  },
  searchWrapper: {
    marginBottom: '25px',
  },
  heading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: 'rgba(0,0,0,.7)',
  },
  selectInput: {
    width: '167px',
    marginTop: '0px',
  },
  checkIcon: {
    marginLeft: '10px',
    color: 'green',
    fontSize: '.95rem',
  },
});

const selectInputItems = [
  { label: '' },
  { label: 'Agent Name' },
  { label: 'Client Name' },
  { label: 'Deal ID' },
];

const searchTypes = {
  dateRange: 'dateRange',
  specific: 'specific',
};

@observer
class AdminAreaDealsContainer extends Component {
  constructor(props) {
    super(props);

    const today = moment();

    this.state = {
      createAgentModalOpen: false,
      snackbarOpen: false,
      snackbarText: '',
      snackbarUndoFunction: null,
    };
  }

  toggleCreateAgentModal = state => {
    const { createAgentModalOpen } = this.state;
    this.setState({
      createAgentModalOpen:
        typeof state === 'boolean' ? state : !createAgentModalOpen,
    });
  };

  confirmAgentCreated = () => {
    this.setState({
      createAgentModalOpen: false,
      snackbarOpen: true,
      snackbarText: 'Agent created successfully',
    });
  };

  handleCloseSnackbar = () => {
    this.setState({
      snackbarOpen: false,
      snackbarUndoFunction: null,
    });
  };

  render() {
    const { classes } = this.props;
    const { createAgentModalOpen } = this.state;

    return (
      <Query query={agentsQuery}>
        {({ loading, error, data }) => {
          console.log(data);
          if (loading)
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 'calc(100vh - 110px)',
                }}
              >
                <Loader color="#f44336" loading />
              </div>
            );
          // TODO: change the error message to a generic
          // 'error connecting to server' message
          if (error) return `Error!: ${error}`;

          return (
            <div className={classes.wrapper}>
              <div>
                <div className={classes.buttonsWrapper}>
                  <Button
                    variant="raised"
                    onClick={this.toggleCreateAgentModal}
                    classes={{ root: classes.dealsSummaryBtn }}
                  >
                    <AddIcon />
                    Create Agent
                  </Button>
                </div>
              </div>

              <AdminAreaAgentsTableContainer agents={data.agents} />

              <CreateAgentDialogBox
                open={createAgentModalOpen}
                toggleCreateAgentModal={this.toggleCreateAgentModal}
              />

              <Snackbar
                classes={{ root: classes.snackBar }}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={this.state.snackbarOpen}
                autoHideDuration={6000}
                onClose={this.handleCloseSnackbar}
                contentProps={{
                  'aria-describedby': 'snackbar-id',
                }}
                message={
                  <span id="snackbar-id">{this.state.snackbarText}</span>
                }
                action={[
                  this.snackbarUndoFunction ? (
                    <Button
                      key="undo"
                      color="secondary"
                      size="small"
                      onClick={() => {
                        this.handleCloseSnackbar();
                        if (
                          this.state.snackbarUndoFunction &&
                          typeof snackbarUndoFunction === 'function'
                        ) {
                          this.snackbarUndoFunction();
                        }
                      }}
                    >
                      UNDO
                    </Button>
                  ) : (
                    undefined
                  ),
                  <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={this.handleCloseSnackbar}
                  >
                    <CloseIcon />
                  </IconButton>,
                ]}
              />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(AdminAreaDealsContainer);
