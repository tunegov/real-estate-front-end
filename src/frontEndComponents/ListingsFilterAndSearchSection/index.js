import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import uuid from 'uuid/v4';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import { DatePicker } from 'antd';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';

import ListingsSearchBar from '../ListingsSearchBar';
import FineGrainListingFilters from '../FineGrainListingsFilters';
import MainListingFilters from '../MainListingFilters';

const petPolicySelectItems = [
  {
    value: 'Cats Allowed',
    label: 'Cats Allowed'
  }, {
    value: 'Dogs Allowed',
    label: 'Dogs Allowed'
  }, {
    value: 'Cats and Dogs Allowed',
    label: 'Cats and Dogs Allowed'
  }, {
    value: 'Case by Case',
    label: 'Case by Case'
  }, {
    value: 'No Pets Allowed',
    label: 'No Pets Allowed'
  }
]

const styles = theme => ({
  root: {
    fontFamily: theme.frontEnd.typography.fontFamily.sansSerif,
    backgroundColor: '#fff',
  },
  topRow: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
    minWidth: 120,
    color: 'white',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    fontSize: '21px',
    color: 'white'
  },
  datePicker: {
    width: '100%',
  },
});

let sqf_query = "";
let price_query = "";
let pets_query = "";
let move_in_date_query = "";

@observer
@withStyles(styles)
class ListingsFilterAndSearchSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minPrice: null,
      maxPrice: null,
      dropDownID: false,
      minSize: null,
      maxSize: null,
      pets: '',
      date: null

    };
  }

  openDropDown=(dropDownID)=> {

    if (dropDownID!==this.state.dropDownID) {
      this.setState({dropDownID: dropDownID});
    } else {
      this.setState({dropDownID: ""})
    }

  }

  handleMinPrice=(event)=> {
    this.setState({minPrice: event.target.value});
  }
  
  handleMaxPrice=(event)=> {
    this.setState({maxPrice: event.target.value});
  }

  handleMinSize=(event)=> {
    this.setState({minSize: event.target.value});
  }
  
  handleMaxSize=(event)=> {
    this.setState({maxSize: event.target.value});
  }

  handlePets=(event)=> {
    this.setState({pets: event.target.value});
  }

  makingQuery() {
    let query = "";

    if (this.state.minPrice>0 && this.state.maxPrice>0) {
      price_query = '{"price":{"$gt":'+this.state.minPrice+',"$lt":'+this.state.maxPrice+'}}';
    } else if (!this.state.minPrice && this.state.maxPrice>0) {
      price_query = '{"price":{"$lte":'+this.state.maxPrice+'}}';
    } else if (this.state.minPrice && !this.state.maxPrice) {
      price_query = '{"price":{"$gte":'+this.state.minPrice+'}}';
    }

    if (price_query!="") {
      query = price_query;      
    }

    if (this.state.minSize>0 && this.state.maxSize>0) {
      sqf_query = '{"sqFootage":{"$gt":'+this.state.minSize+',"$lt":'+this.state.maxSize+'}}';
    } else if (!this.state.minSize && this.state.maxSize>0) {
      sqf_query = '{"sqFootage":{"$lte":'+this.state.maxSize+'}}';
    } else if (this.state.minSize && !this.state.maxSize) {
      sqf_query = '{"sqFootage":{"$gte":'+this.state.minSize+'}}';
    }

    if (query!=""&&sqf_query!="") {
      query += "," + sqf_query;      
    } else if (sqf_query!="") {
      query = sqf_query;
    }

    if ( this.state.pets!="") {
      pets_query = '{"petPolicy":"'+ this.state.pets +'"}';
    }

    if (query!=""&&pets_query!="") {
      query += "," + pets_query;      
    } else if (pets_query!="") {
      query = pets_query;
    }

    if (this.state.date) {
      move_in_date_query = '{"moveInDate": {"$lte":"' + this.formatDate(this.state.date) + '"}}';
    }

    if (query!=""&&move_in_date_query!="") {
      query += "," + move_in_date_query;      
    } else if (move_in_date_query!="") {
      query = move_in_date_query;
    }

    if (query!="") {
      query = '{ "$and": [ ' + query + '] }';
    } else {
      query = '{}';
    }
    // alert(query);
    this.props.onFilterClick(query);
    this.setState({dropDownID: ""})
  }

  clearPrice=()=> {
    this.setState({minPrice: ""});
    this.setState({ maxPrice: ""});
    this.setState({openPrice: false});
    price_query = "";
    this.makingQuery();
  }

  clearSQF=()=> {
    this.setState({minSize: ""});
    this.setState({ maxSize: ""});
    sqf_query = "";
    this.makingQuery();
  }

  clearPets=()=> {
    this.setState({pets: ""});
    this.setState({date: ""});
    move_in_date_query = "";
    pets_query = "";
    this.makingQuery();
  }

  onChangeDate = date  => this.setState({ date: date })

  formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

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
                  onClick={()=>this.openDropDown('size-dropdown')}
                >
                  SQFT <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                {/* <ul className="dropdown-menu"> */}
                {this.state.dropDownID=="size-dropdown"&&
                  <div className="dropdown-content" id="size-dropdown">
                    <div className="listings-price" style={{width: '444px'}}>
                      <div className="form-group-has-addons">
                        <h3 style={{width: '100%', float: 'left', width: '100%', float: 'left', color: 'white', marginBottom: '0', borderBottom: '1px solid white'}}>SQFT</h3>
                      </div>
                      <div className="form-group-has-addons">
                        <div className="form-control-group">
                          <label className="form-label">Min.</label>
                          <input className="form-control" value={this.state.minSize} onChange={this.handleMinSize} ></input>
                        </div>
                        <div className="form-control-group">
                          <button className="button-light" type="button">to</button>
                        </div>
                        <div className="form-control-group">
                          <label className="form-label">Max.</label>
                          <input className="form-control" value={this.state.maxSize} onChange={this.handleMaxSize} ></input>														
                        </div>										
                      </div>
                      <div className="listings-action-group">
                        <button className="button-outline-light-listings-action" type="button" onClick={this.clearSQF}>Clear</button>
                        <button className="button-primary-listings-action" type="button" onClick={()=>this.makingQuery()}>Apply</button>
                      </div>
                    </div>							
                  </div> } 
                {/* </ul> */}
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={()=>this.openDropDown('price-dropdown')}
                >
                  price <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                {/* <ul className="dropdown-menu"> */}
                {this.state.dropDownID=="price-dropdown"&&
                    <div className="dropdown-content" id="price-dropdown">
                      <div className="listings-price"> 
                        <div className="form-group-has-addons">

                          <div className="form-control-group">
                            <button className="button-outline-light" type="button">$</button>
                          </div>	
                          <div className="form-control-group">											
                            <button className="button-active-primary" type="button">PPSF</button>
                          </div>
                          <div className="form-control-group">
                            <label className="form-label">Min.</label>
                            <input className="form-control" value={this.state.minPrice} onChange={this.handleMinPrice} ></input>
                          </div>
                          <div className="form-control-group">
                            <button className="button-light" type="button">to</button>
                          </div>
                          <div className="form-control-group">
                            <label className="form-label">Max.</label>
                            <input className="form-control" value={this.state.maxPrice} onChange={this.handleMaxPrice} ></input>														
                          </div>										
                        </div>
                        <div className="listings-action-group">
                          <button className="button-outline-light-listings-action" type="button" onClick={this.clearPrice}>Clear</button>
                          <button className="button-primary-listings-action" type="button" onClick={()=>this.makingQuery()}>Apply</button>
                        </div>
                      </div>							
                    </div> }
                {/* </ul> */}
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
                  role="button"
                  onClick={()=>this.openDropDown('more_filters')}
                >
                  more filters{' '}
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                {/* <ul className="dropdown-menu"> */}
                {this.state.dropDownID=="more_filters"&&
                  <div className="dropdown-content" id="price-dropdown">
                    <div className="listings-price">
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="pets-simple" style={{color: 'white', fontSize: '17px'}}>Pets</InputLabel>
                          <Select
                            style={{color: 'white'}}
                            value={this.state.pets}
                            onChange={this.handlePets}
                            inputProps={{
                              name: 'Pets',
                              id: 'pets-simple',
                            }}
                            style={{color: 'white', fontSize: '21px'}}
                          >
                            {petPolicySelectItems.map((item)=>
                              <MenuItem value={item.value} style={{fontSize: '21px'}}>{item.label}</MenuItem>
                            )}
                          </Select>
                        </FormControl>
                        <div className="form-group-has-addons">
                          <h3 style={{width: '100%', float: 'left', width: '100%', float: 'left', color: 'white', marginBottom: '0', borderBottom: '1px solid white'}}>Move in Date</h3>
                        </div>
                        <div className="form-group-has-addons">
                          <div className="form-control-group" style={{width: '100%'}}>
                            <DatePicker
                              className={classes.datePicker}
                              onChange={this.onChangeDate}
                              disabledDate={false}
                              type="text"
                              placeholder="Move in Date"
                            />
                          </div>										
                        </div>
                        <div className="listings-action-group">
                          <button className="button-outline-light-listings-action" type="button" onClick={this.clearPets}>Clear</button>
                          <button className="button-primary-listings-action" type="button" onClick={()=>this.makingQuery()}>Apply</button>
                        </div>
                      </div>							
                  </div>               
                }

                {/* </ul> */}
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
