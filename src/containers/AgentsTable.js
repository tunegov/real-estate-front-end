import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import { RiseLoader } from 'react-spinners';
import AgentsTable from '../components/AgentsTable';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'block',
  },
  progressWrapper: {
    position: 'absolute',
    top: 'calc(48% + 60px)',
    left: '48%',
    textAlign: 'center',
    '& > :first-child': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});


@observer
class AgentsTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableIsLoading: true,
    };
  }
  render() {
    const { tableIsLoading } = this.state;
    const { classes, ...rest } = this.props;
    return (
      <div>
        {/*
        <div className={classes.progressWrapper}>
          <RiseLoader className={classes.progress} loading={true} />
        </div>
      */}
        <AgentsTable {...rest} onMount={() => this.setState({ tableIsLoading: false })} />
      </div>
    );
  }
}

export default withStyles(styles)(AgentsTableContainer);
