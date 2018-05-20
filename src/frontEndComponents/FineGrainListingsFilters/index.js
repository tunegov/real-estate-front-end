import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const styles = theme => ({
  root: {
    display: 'flex',
    height: '46px',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '540px',
    backgroundColor: '#272A2E',
  },
  filterItem: {
    display: 'flex',
    height: '100%',
    paddingLeft: '15px',
    paddingRight: '15px',
    alignItems: 'center',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#fff',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
  },
  expandArrowWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '15px',
    overflow: 'visible',
  },
  expandArrow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '23px',
    width: '23px',
    fontSize: '1.1rem',
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,.8)',
    borderRadius: '50%',
    padding: '2px',
    paddingTop: '4px',
    overflow: 'visible',
  },
});

@observer
@withStyles(styles)
class FineGrainListingsFilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOpenFilter: '',
    };
  }
  render() {
    const { classes, onFilterClick } = this.props;
    const { currentOpenFilter } = this.state;

    return (
      <div className={classes.root}>
        <button
          className={classes.filterItem}
          id="neighborhood"
          onClick={onFilterClick}
        >
          Neighborhood
          <span className={classes.expandArrowWrapper}>
            <ArrowDownIcon color="inherit" classes={{ root: classes.expandArrow }} />
          </span>
        </button>
        <button
          className={classes.filterItem}
          id="price"
          onClick={onFilterClick}
        >
          Price
          <span className={classes.expandArrowWrapper}>
            <ArrowDownIcon color="inherit" classes={{ root: classes.expandArrow }} />
          </span>
        </button>
        <button
          className={classes.filterItem}
          id="beds"
          onClick={onFilterClick}
        >
          Beds
          <span className={classes.expandArrowWrapper}>
            <ArrowDownIcon color="inherit" classes={{ root: classes.expandArrow }} />
          </span>
        </button>
        <button
          className={classes.filterItem}
          id="baths"
          onClick={onFilterClick}
        >
          Baths
          <span className={classes.expandArrowWrapper}>
            <ArrowDownIcon color="inherit" classes={{ root: classes.expandArrow }} />
          </span>
        </button>
        <button
          className={classes.filterItem}
          id="filters"
          onClick={onFilterClick}
        >
          Filters
          <span className={classes.expandArrowWrapper}>
            <ArrowDownIcon color="inherit" classes={{ root: classes.expandArrow }} />
          </span>
        </button>
      </div>
    );
  }
}

export default FineGrainListingsFilters;
