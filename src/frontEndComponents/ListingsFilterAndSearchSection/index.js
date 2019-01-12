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
let beds_query = "";
let baths_query = "";

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
      date: null,
      beds: [],
      baths: [],
    };
  }

  openDropDown=(dropDownID)=> {

    if ($('#'+dropDownID).hasClass('active')) {
      $('#'+dropDownID).removeClass('active'); 
      // $('#'+dropDownID).siblings('.dropdown-content').slideUp('slow');
      $('#'+dropDownID).siblings('.dropdown-content').children('.listings-price').slideUp('slow');
    }
    else {
      $('.dropdown a').removeClass('active'); 
      $('.listings-price').css('display', 'none');
      $('.dropdown-content').css('display', 'none');
      $('#'+dropDownID).siblings('.dropdown-content').css('display', 'block');
      $('#'+dropDownID).addClass('active');
      $('#'+dropDownID).siblings('.dropdown-content').children('.listings-price').slideDown('slow');
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

  handlePets(pet, button_id) {
    $('.pets_redio button').removeClass('active');
    $('#'+button_id).addClass('active');
    this.setState({pets: pet});
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

    if(this.state.beds.length>0) {
      beds_query = '{"$or":[' + this.state.beds + ']}';
    }

    if (query!=""&&beds_query!="") {
      query += "," + beds_query;      
    } else if (beds_query!="") {
      query = beds_query;
    }

    if(this.state.baths.length>0) {
      baths_query = '{"$or":[' + this.state.baths + ']}';
    }

    if (query!=""&&baths_query!="") {
      query += "," + baths_query;      
    } else if (baths_query!="") {
      query = baths_query;
    }

    if (query!="") {
      query = '{ "$and": [ ' + query + '] }';
    } else {
      query = '{}';
    }

    alert(query);
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
    this.setState({beds: []});
    this.setState({baths: []});
    sqf_query = "";
    baths_query = "";
    beds_query = "";
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

  onChangeBeds(bed, id) {
    let beds = this.state.beds
    $('#' + id).toggleClass('active');
    if($('#' + id).hasClass('active')) {
      beds.push('{"beds":' + bed + '}');
    } else {
      beds.pop('{"beds":' + bed + '}');
    }

    this.setState({beds: beds});

  }

  onChangeBaths(bath, id) {
    $('#' + id).toggleClass('active');
    let baths = this.state.baths
    if($('#' + id).hasClass('active')) {
      baths.push('{"baths":' + '{"$gte":' + bath + '}}');
    } else {
      baths.pop('{"baths":' + '{"$gte":' + bath + '}}');
    }

    this.setState({baths: baths});
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

      <div className="city-top">
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
                  className="btn btn-toggle"
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
                  onClick={()=>this.openDropDown('neighborhoods-dropdown')}
                  id="neighborhoods-dropdown"
                >
                  Neighborhoods{' '}
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                  <div className="dropdown-content size">
                    <div className="listings-price neighborhoods"> 
                        <ul className="nav nav-tabs tabs-left sideways">
                          <li className="active"><button data-target="#home-v" data-toggle="tab">Bronx</button></li>
                          <li><button data-target="#profile-v" data-toggle="tab">Brooklyn</button></li>
                          <li><button data-target="#messages-v" data-toggle="tab">Manhattan</button></li>
                          <li><button data-target="#settings-v" data-toggle="tab">Queens</button></li>
                          <li><button data-target="#Staten-v" data-toggle="tab">Staten Island</button></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane active" id="home-v">
                            <div className="col-md-6">
                              <form>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale1"/> <label for="Annadale1">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                              </form>
                            </div>
                            <div className="col-md-6">
                              <form>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                              </form>
                            </div>
                          </div>
                          <div className="tab-pane" id="profile-v">
                            <div className="col-md-6">
                              <form>     
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                              </form>
                            </div>
                            <div className="col-md-6">
                              <form>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                              </form>
                            </div>
                          </div>
                          <div className="tab-pane" id="messages-v">
                            <div className="col-md-6">
                              <form>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                              </form>
                            </div>
                            <div className="col-md-6">
                              <form>
                                <div className="form-group1"> <input type="checkbox" id="Annadale3"/> <label for="Annadale3">Midland Beach</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                              </form>
                            </div>
                          </div>
                          <div className="tab-pane" id="settings-v">
                            <div className="col-md-6">
                              <form>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                              </form>
                            </div>
                            <div className="col-md-6">
                              <form>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Midland Beach</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                              </form>
                            </div>
                          </div>
                          <div className="tab-pane" id="Staten-v">
                            <div className="col-md-6">
                              <form>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                              </form>
                            </div>
                            <div className="col-md-6">
                              <form>
                                  <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Midland Beach</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Annadale"/> <label for="Annadale">Annadale</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arden"/> <label for="Arden">Arden Heights</label> </div>
                                  <div className="form-group1"> <input type="checkbox" id="Arrochar"/> <label for="Arrochar">Arrochar</label> </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        <div className="drop-footer"> <button className="clear">Clear</button> <button className="apply-cust">Apply</button> </div>
                      </div>
                  </div> 
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
                  id="price-dropdown"
                >
                  price <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                    <div className="dropdown-content">
                      <div className="listings-price"> 
                        <div className="form-row listings-price-row">
                            <div className="form-group form-group-has-addons">
                                <div className="form-control-group"> <button className="button button-outline-light button-active-primary" type="button">$</button> </div>
                                <div className="form-control-group"> <label className="form-label">Min.</label> <input className="form-control" value={this.state.minPrice} onChange={this.handleMinPrice} pattern="\d*" id="listings-min-price-input"/> </div>
                                <div className="form-control-group"> <button className="button button-light button-static" type="button">to</button> </div>
                                <div className="form-control-group"> <label className="form-label">Max.</label> <input className="form-control" value={this.state.maxPrice} onChange={this.handleMaxPrice} pattern="\d*"/> </div>
                            </div>
                        </div>
                        <div className="drop-footer"> <button className="clear" onClick={this.clearPrice}>Clear</button> <button className="apply-cust" onClick={()=>this.makingQuery()}>Apply</button> </div>
                      </div>							
                    </div> 
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
                  id="size-dropdown"

                >
                  SIZE <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                  <div className="dropdown-content" id="size-dropdown">
                    <div className="listings-price">
                      <h3>Bedrooms (Select all that apply)</h3>
                      <div className="bed-room">
                        <div className="checkbox"> <button id="bed1" onClick={()=>this.onChangeBeds("1", "bed1")}>1</button> </div>
                        <div className="checkbox"> <button id="bed2" onClick={()=>this.onChangeBeds("2", "bed2")} >2</button></div>
                        <div className="checkbox"> <button id="bed3" onClick={()=>this.onChangeBeds("3", "bed3")} >3</button></div>
                        <div className="checkbox"> <button id="bed4" onClick={()=>this.onChangeBeds("4", "bed4")} >4+</button> </div>
                      </div>
                      <h3>Bathrooms (Select all that apply)</h3>
                      <div className="bed-room">
                        <div className="checkbox"> <button onClick={()=>this.onChangeBaths(0, "Bath")} id="Bath">Any</button> </div>
                        <div className="checkbox"> <button onClick={()=>this.onChangeBaths(1, "Bath1")} id="Bath1">1+</button> </div>
                        <div className="checkbox"> <button onClick={()=>this.onChangeBaths(1.5, "Bath2")} id="Bath2">1.5+</button> </div>
                        <div className="checkbox"> <button onClick={()=>this.onChangeBaths(2, "Bath3")} id="Bath3">2+</button> </div>
                        <div className="checkbox"> <button onClick={()=>this.onChangeBaths(2.5, "Bath4")} id="Bath4">2.5+</button> </div>
                        <div className="checkbox"> <button onClick={()=>this.onChangeBaths(3, "Bath5")} id="Bath5">3+</button> </div>
                        <div className="checkbox"> <button onClick={()=>this.onChangeBaths(3.5, "Bath6")} id="Bath6">3.5+</button> </div>
                      </div>   
                      <h3>SQFT</h3>
                      <div className="form-group form-group-has-addons">
                          <div className="form-control-group"><label className="form-label">Min.</label><input className="form-control" type="number" value={this.state.minSize} onChange={this.handleMinSize}/></div>
                          <div className="form-control-group"><button className="button button-light button-static" type="button">to</button></div>
                          <div className="form-control-group"><label className="form-label">Max.</label><input className="form-control" type="number" value={this.state.maxSize} onChange={this.handleMaxSize}/></div>
                      </div>
                      <div className="drop-footer"> <button className="clear" onClick={this.clearSQF}>Clear</button> <button className="apply-cust" onClick={()=>this.makingQuery()}>Apply</button> </div>   
                    </div>						
                  </div>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  onClick={()=>this.openDropDown('more-filters')}
                  id="more-filters"
                >
                  more filters{' '}
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                  <div className="dropdown-content">
                    <div className="listings-price">
                      <div className="col-md-12">
                        <h3>Pets</h3>
                        <div className="outline">
                          <div className="pets_redio">
                            <button id="pets" onClick={()=>this.handlePets("Pets Allowed", "pets")}>Pets Allowed</button>
                          </div>
                          <div className="pets_redio">
                            <button id="dogs1" onClick={()=>this.handlePets("Dogs Only", "dogs1")}>Dogs Only</button>
                          </div>
                          <div className="pets_redio">
                            <button id="dogs2" onClick={()=>this.handlePets("Dogs Only", "dogs2")}>Dogs Only</button>
                          </div>
                        </div>
                        <h3>Available On or Before</h3>
                        <div className="form-control-group" style={{width: '77%'}}>
                          <DatePicker
                            className={classes.datePicker}
                            onChange={this.onChangeDate}
                            disabledDate={false}
                            type="text"
                            placeholder="Move in Date"
                          />
                        </div>
                        <div className="drop-footer"> 
                          <button className="clear" onClick={this.clearPets}>Clear</button> 
                          <button className="apply-cust" onClick={()=>this.makingQuery()}>Apply</button> 
                        </div>
                      </div>                                            
                    </div>							
                  </div>               
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingsFilterAndSearchSection;
