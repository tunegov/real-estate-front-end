import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ListingsSearchBar from '../ListingsSearchBar';
import FineGrainListingFilters from '../FineGrainListingsFilters';
import MainListingFilters from '../MainListingFilters';

const styles = theme => ({
  root: {
    fontFamily: theme.frontEnd.typography.fontFamily.sansSerif,
    backgroundColor: '#fff',
  },
  topRow: {
    display: 'flex',
  },
});

@observer
@withStyles(styles)
class ListingsFilterAndSearchSection extends Component {
  render() {
    const {
      classes,
      onSearchInputChange,
      getInput,
      value,
      onSearchKeyDown,
      onSearchKeyUp,
    } = this.props;
    return (
      // <div className={classes.root}>
      <div className="city-top">
        {/* <FineGrainListingFilters />
        <ListingsSearchBar
          onChange={onSearchInputChange}
          value={value}
          getInput={getInput}
          onKeyDown={onSearchKeyDown}
          onKeyUp={onSearchKeyUp}
        /> */}
        <div className="mobile-menu hidden-md hidden-lg">
          <span>Filter listing</span>
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
        <div className="info-menu">
          <div className="city-search">
            <span>
              <i className="fa fa-map-marker" aria-hidden="true" />
            </span>
            <form>
              <input
                type="text"
                placeholder="Search for features, property types, places, and more..."
              />
              {/* <ListingsSearchBar
                onChange={onSearchInputChange}
                value={value}
                getInput={getInput}
                onKeyDown={onSearchKeyDown}
                onKeyUp={onSearchKeyUp}
              /> */}
              <button>
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>
          <div className="city-navigation">
            <ul>
              <li>
                <button
                  type="button"
                  className="btn btn-toggle active"
                  data-toggle="button"
                  aria-pressed="true"
                  autoComplete="off"
                >
                  <div className="handle" />
                </button>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Neighborhoods{' '}
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  price <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Room <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  bath <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  more filters{' '}
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* <MainListingFilters /> */}
      </div>
    );
  }
}

export default ListingsFilterAndSearchSection;
