import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import GraphIcon from '@material-ui/icons/Equalizer';
import SearchIcon from '@material-ui/icons/Search';
import { observer } from 'mobx-react';
import moment from 'moment';
import Grid from 'material-ui/Grid';
import { DatePicker } from 'material-ui-pickers';
import TextField from 'material-ui/TextField';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MaterialCustomSelectInput from '../components/MaterialCustomSelectInput';
import AdminAreaDealsTableContainer from './AdminAreaDealsTableContainer';
import DealsSummaryDealDialogBox from '../components/DealsSummaryDealDialogBox';

const styles = theme => ({
  addDealBtn: {
  },
  dealsSummaryBtn: {
    marginLeft: '25px',
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
  searchBoxHeader: {
    marginBottom: '20px',
  },
  searchWrapper: {
    marginBottom: '25px',
  },
  heading: {
    display: 'flex',
    justifyCOntent: 'center',
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

    this.state = {
      dealsSummaryDialogBoxOpen: false,
      startDate: moment().subtract(1, 'months').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
      fineGrainSearchType: '',
      fineGrainSearchValue: '',
      currentSearchType: searchTypes.dateRange,
    };
  }

  toggleDealsSummaryDialogBox = () => {
    this.setState({ dealsSummaryDialogBoxOpen: !this.state.dealsSummaryDialogBoxOpen });
  };

  onStartDateCHange = ({ target }) => {
    const date = target.value;
    if (moment(date).isAfter(moment())) return;
    if (moment(date).isAfter(this.state.endDate)) return;
    this.setState({ startDate: date });
  }

  onEndDateCHange = ({ target }) => {
    const date = target.value;
    if (moment(date).isAfter(moment())) return;
    if (moment(date).isBefore(this.state.startDate)) return;
    this.setState({ endDate: date });
  }

  onDateRangeSearch = () => {
    const { currentSearchType } = this.state;

    if (currentSearchType !== searchTypes.dateRange) {
      this.setState({ currentSearchType: searchTypes.dateRange });
    }
  }

  onSpecificSearch = () => {
    const { currentSearchType } = this.state;

    if (currentSearchType !== searchTypes.specific) {
      this.setState({ currentSearchType: searchTypes.specific });
    }
  }

  render() {
    const { classes } = this.props;
    const {
      dealsSummaryDialogBoxOpen,
      startDate, endDate,
      fineGrainSearchType,
      fineGrainSearchValue,
      currentSearchType,
    } = this.state;
    const {
      toggleDealsSummaryDialogBox,
      onStartDateCHange,
      onEndDateCHange,
      onDateRangeSearch,
      onSpecificSearch,
    } = this;


    return (
      <div className={classes.wrapper}>
        <div>
          <div className={classes.buttonsWrapper}>
            <Button
              variant="raised"
              onClick={toggleDealsSummaryDialogBox}
              classes={{ root: classes.dealsSummaryBtn }}
            >
              <GraphIcon />
              Deals Summary
            </Button>
          </div>
        </div>

        <div className={classes.searchWrapper}>
          <Grid container spacing={16}>
            <Grid item xs={12} lg={6}>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography align="center" color="inherit" className={classes.heading}>
                    Search Deals By: Date Range (Default)
                    {currentSearchType === searchTypes.dateRange ? <CheckCircleIcon classes={{ root: classes.checkIcon }} /> : null}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className={classes.tableFormWrapper}>
                    <Grid container spacing={16}>
                      <Grid item xs={12} sm={6}>
                        <div className={classes.formControlWrapperCenter}>

                          <DatePicker
                            value={startDate}
                            onChange={onStartDateCHange}
                            clearable
                            className={classes.textField}
                            disableFuture
                            maxDateMessage="Date must be less than today and range end date"
                          />


                        </div>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <div className={classes.formControlWrapperCenter}>
                          <TextField
                            id="endDate"
                            label="End Day"
                            type="date"
                            value={endDate}
                            onChange={onEndDateCHange}
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className={classes.submitBtnWrapper}>
                          <Button
                            variant="raised"
                            onClick={onDateRangeSearch}
                            color="secondary"
                          >
                            <SearchIcon />
                            Search
                          </Button>
                        </div>
                      </Grid>
                    </Grid>

                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>

            <Grid item xs={12} lg={6}>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography align="center" color="inherit" className={classes.heading}>
                    Search Deals By: Other
                    {currentSearchType === searchTypes.specific ? <CheckCircleIcon classes={{ root: classes.checkIcon }} /> : null}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className={classes.tableFormWrapper}>
                    <Grid container spacing={16}>
                      <Grid item xs={12} sm={6}>
                        <div className={classes.formControlWrapperCenter}>
                          <MaterialCustomSelectInput
                            className={classes.selectInput}
                            value={fineGrainSearchType || undefined}
                            onChange={({ target }) => this.setState({ fineGrainSearchType: target.value })}
                            placeholder="Search Type..."
                            label="Search Type"
                            inputProps={{}}
                            selectInputItems={selectInputItems}
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <div className={classes.formControlWrapperCenter}>
                          <TextField
                            id="fineGrainSearchValue"
                            label="Search Item..."
                            type="text"
                            value={fineGrainSearchValue}
                            onChange={({ target }) => this.setState({ fineGrainSearchValue: target.value })}
                            className={classes.textField}
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className={classes.submitBtnWrapper}>
                          <Button
                            variant="raised"
                            onClick={onSpecificSearch}
                            color="secondary"
                          >
                            <SearchIcon />
                            Search
                          </Button>
                        </div>
                      </Grid>
                    </Grid>

                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>

          </Grid>
        </div>

        <AdminAreaDealsTableContainer />
        <DealsSummaryDealDialogBox
          toggleDealsSummaryDialogBox={toggleDealsSummaryDialogBox}
          dealsSummaryDialogBoxOpen={dealsSummaryDialogBoxOpen}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AdminAreaDealsContainer);
