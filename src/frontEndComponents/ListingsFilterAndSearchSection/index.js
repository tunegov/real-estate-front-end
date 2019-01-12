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

const bronxInfo = [
  {   
    value: 'Baychester'
  },
  {   
    value: 'Bedford Park'
  },
  {   
    value: 'Belmont'
  },
  {   
    value: 'Bronx Park'
  },
  {   
    value: 'Castle Hill'
  },
  {   
    value: 'City Island'
  },
  {   
    value: 'Clason Point'
  },
  {   
    value: 'Co-op City'
  },
  {   
    value: 'Concourse'
  },
  {   
    value: 'Country Club'
  },
  {   
    value: 'East Tremont'
  },
  {   
    value: 'Eastchester'
  },
  {   
    value: 'Fieldston'
  },
  {   
    value: 'Fordham'
  },
  {   
    value: 'Hart Island'
  },
  {   
    value: 'High Bridge'
  },
  {   
    value: 'Hunts Point'
  },
  {   
    value: 'Kingsbridge'
  },
  {   
    value: 'Longwood'
  },
  {   
    value: 'Melrose'
  },
  {   
    value: 'Morris Heights'
  },
  {   
    value: 'Morris Park'
  },
  {   
    value: 'Mott Haven'
  },
  {   
    value: 'North Riverdale'
  },
  {   
    value: 'Norwood'
  },
  {   
    value: 'Parkchester'
  },
  {   
    value: 'Pelham Bay'
  },
  {   
    value: 'Pelham Bay Park'
  },
  {   
    value: 'Pelham Gardens'
  },
  {   
    value: 'Port Morris'
  },
  {   
    value: 'Rikers Island'
  },
  {   
    value: 'Riverdale'
  },
  {   
    value: 'Soundview'
  },
  {   
    value: 'South Bronx'
  },
  {   
    value: 'Spuyten Duyvil'
  },
  {   
    value: 'Tremont'
  },
  {   
    value: 'Unionport'
  },
  {   
    value: 'University Heights'
  },
  {   
    value: 'Van Cortlandt Park'
  },
  {   
    value: 'Van Nest'
  },
  {   
    value: 'Wakefield'
  },
  {   
    value: 'West Farms'
  },
  {   
    value: 'Westchester'
  },
  {   
    value: 'Williamsbridge'
  },
  {   
    value: 'Woodlawn'
  },
];
const brooklynInfo = [
  {
    value: 'Bath Beach'
  },
  {
    value: 'Fort Hamilton'
  },
  {
    value: 'Bay Ridge'
  },
  {
    value: 'Bedford Stuyvesant'
  },
  {
    value: 'Ocean Hill'
  },
  {
    value: 'Bensonhurst'
  },
  {
    value: 'New Utrecht'
  },
  {
    value: 'Bergen Beach'
  },
  {
    value: 'Boerum Hill'
  },
  {
    value: 'Borough Park'
  },
  {
    value: 'Brighton Beach'
  },
  {
    value: 'Brooklyn Heights'
  },
  {
    value: 'Brownsville'
  },
  {
    value: 'Bushwick'
  },
  {
    value: 'Canarsie'
  },
  {
    value: 'Carroll Gardens'
  },
  {
    value: 'Clinton Hill'
  },
  {
    value: 'Cobble Hill'
  },
  {
    value: 'Columbia Street Waterfront District'
  },
  {
    value: 'Coney Island'
  },
  {
    value: 'Crown Heights'
  },
  {
    value: 'DUMBO'
  },
  {
    value: 'Downtown'
  },
  {
    value: 'Dyker Heights'
  },
  {
    value: 'East Flatbush'
  },
  {
    value: 'Wingate'
  },
  {
    value: 'East New York'
  },
  {
    value: 'Flatbush'
  },
  {
    value: 'Flatlands'
  },
  {
    value: 'Floyd Bennett Field'
  },
  {
    value: 'Fort Greene'
  },
  {
    value: 'Georgetown'
  },
  {
    value: 'Gerritsen Beach'
  },
  {
    value: 'Gowanus'
  },
  {
    value: 'Gravesend'
  },
  {
    value: 'Greenpoint'
  },
  {
    value: 'Homecrest'
  },
  {
    value: 'Kensington'
  },
  {
    value: 'Manhattan Beach'
  },
  {
    value: 'Marine Park'
  },
  {
    value: 'Midwood'
  },
  {
    value: 'Mill Basin'
  },
  {
    value: 'Navy Yard'
  },
  {
    value: 'Ocean Parkway'
  },
  {
    value: 'Park Slope'
  },
  {
    value: 'Greenwood'
  },
  {
    value: 'Prospect Heights'
  },
  {
    value: 'Prospect Lefferts Gardens'
  },
  {
    value: 'Prospect Park'
  },
  {
    value: 'Prospect Park South'
  },
  {
    value: 'Red Hook'
  },
  {
    value: 'Sheepshead Bay'
  },
  {
    value: 'Sunset Park'
  },
  {
    value: 'Vinegar Hill'
  },
  {
    value: 'West Jamaica Bay Islands'
  },
  {
    value: 'Williamsburg'
  },
  {
    value: 'Windsor Terrace'
  },
];
const manhattanInfo = [
  {
    value: 'Battery Park'
  },
  {
    value: 'Carnegie Hill'
  },
  {
    value: 'Central Park'
  },
  {
    value: 'Chelsea'
  },
  {
    value: 'Chinatown'
  },
  {
    value: 'Clinton'
  },
  {
    value: 'Columbus Circle'
  },
  {
    value: 'East Harlem'
  },
  {
    value: 'East Village'
  },
  {
    value: 'Ellis Island'
  },
  {
    value: 'Financial District'
  },
  {
    value: 'Flatiron District'
  },
  {
    value: 'Garment District'
  },
  {
    value: 'Governors Island'
  },
  {
    value: 'Gramercy'
  },
  {
    value: 'Greenwich Village'
  },
  {
    value: 'Hamilton Heights'
  },
  {
    value: 'Harlem'
  },
  {
    value: 'Inwood'
  },
  {
    value: 'Liberty Island'
  },
  {
    value: 'Little Italy'
  },
  {
    value: 'Lower East Side'
  },
  {
    value: 'Manhattanville'
  },
  {
    value: 'Marble Hill'
  },
  {
    value: 'Midtown'
  },
  {
    value: 'Mill Rock Park'
  },
  {
    value: 'Morningside Heights'
  },
  {
    value: 'Murray Hill'
  },
  {
    value: 'NoHo'
  },
  {
    value: 'Randals-Wards Island'
  },
  {
    value: 'Roosevelt Island'
  },
  {
    value: 'SoHo'
  },
  {
    value: 'Stuyvesant Town'
  },
  {
    value: 'Sutton Place'
  },
  {
    value: 'Tribeca'
  },
  {
    value: 'Tudor City'
  },
  {
    value: 'Turtle Bay'
  },
  {
    value: 'Upper East Side'
  },
  {
    value: 'Upper West Side'
  },
  {
    value: 'Washington Heights'
  },
  {
    value: 'West Village'
  },
];
const queensInfo = [
  {
    value: 'Arverne'
  },
  {
    value: 'Astoria'
  },
  {
    value: 'Astoria Heights'
  },
  {
    value: 'Auburndale'
  },
  {
    value: 'Bay Terrace'
  },
  {
    value: 'Bayside'
  },
  {
    value: 'Belle Harbor'
  },
  {
    value: 'Bellerose'
  },
  {
    value: 'Blissville'
  },
  {
    value: 'Breezy Point'
  },
  {
    value: 'Briarwood'
  },
  {
    value: 'Broad Channel'
  },
  {
    value: 'Cambria Heights'
  },
  {
    value: 'College Point'
  },
  {
    value: 'Corona'
  },
  {
    value: 'Douglaston-Little Neck'
  },
  {
    value: 'East Elmhurst'
  },
  {
    value: 'East Jamaica Bay Islands'
  },
  {
    value: 'Elmhurst'
  },
  {
    value: 'Far Rockaway'
  },
  {
    value: 'Floral park'
  },
  {
    value: 'Flushing'
  },
  {
    value: 'Flushing Meadows Corona Park'
  },
  {
    value: 'Forest Hills'
  },
  {
    value: 'Forest Hills Gardens'
  },
  {
    value: 'Fort Tilden'
  },
  {
    value: 'Fresh Meadows'
  },
  {
    value: 'Glen Oaks'
  },
  {
    value: 'Glendale'
  },
  {
    value: 'Hillcrest'
  },
  {
    value: 'Hollis'
  },
  {
    value: 'Holliswood'
  },
  {
    value: 'Howard Beach'
  },
  {
    value: 'Hunters Point'
  },
  {
    value: 'Jackson Heights'
  },
  {
    value: 'Jacob Riis Park'
  },
  {
    value: 'Jamaica'
  },
  {
    value: 'Jamaica Estates'
  },
  {
    value: 'Jamaica Hills'
  },
  {
    value: 'John F. Kennedy International Airport'
  },
  {
    value: 'Kew Gardens'
  },
  {
    value: 'Kew Gardens Hills'
  },
  {
    value: 'La Guardia Airport'
  },
  {
    value: 'Laurelton'
  },
  {
    value: 'Malba'
  },
  {
    value: 'Maspeth'
  },
  {
    value: 'Middle Village'
  },
  {
    value: 'Neponsit'
  },
  {
    value: 'Oakland Gardens'
  },
  {
    value: 'Ozone Park'
  },
  {
    value: 'Pomonok'
  },
  {
    value: 'Queens Village'
  },
  {
    value: 'Rego Park'
  },
  {
    value: 'Richmond Hill'
  },
  {
    value: 'Ridgewood'
  },
  {
    value: 'Rochdale'
  },
  {
    value: 'Rockaway Beach'
  },
  {
    value: 'Rockaway Park'
  },
  {
    value: 'Rosedale'
  },
  {
    value: 'Roxbury'
  },
  {
    value: 'South Ozone Park'
  },
  {
    value: 'Springfield Gardens'
  },
  {
    value: 'St. Albans'
  },
  {
    value: 'Sunnyside'
  },
  {
    value: 'Utopia'
  },
  {
    value: 'Whitestone'
  },
  {
    value: 'Woodhaven'
  },
  {
    value: 'Woodside'
  },
];
const statenIslandInfo = [
  {
    value: 'Annadale'
  },
  {
    value: 'Arden Heights'
  },
  {
    value: 'Arrochar'
  },
  {
    value: 'Bloomfield'
  },
  {
    value: 'Bulls Head'
  },
  {
    value: 'Butler Manor'
  },
  {
    value: 'Castleton Corners'
  },
  {
    value: 'Charleston'
  },
  {
    value: 'Chelsea-Travis'
  },
  {
    value: 'Clifton'
  },
  {
    value: 'Clove Lake'
  },
  {
    value: 'Dongan Hills'
  },
  {
    value: 'Elm Park'
  },
  {
    value: 'Eltingville'
  },
  {
    value: 'Emerson Hill'
  },
  {
    value: 'Fort Wadsworth'
  },
  {
    value: 'Fresh Kills'
  },
  {
    value: 'Fresh Kills Park'
  },
  {
    value: 'Graniteville'
  },
  {
    value: 'Grant City'
  },
  {
    value: 'Grasmere - Concord'
  },
  {
    value: 'Great Kills'
  },
  {
    value: 'Greenridge'
  },
  {
    value: 'Grymes Hill'
  },
  {
    value: 'Heartland Village'
  },
  {
    value: 'Huguenot'
  },
  {
    value: 'La Tourette Park'
  },
  {
    value: 'Lighthouse Hill'
  },
  {
    value: "Mariner's Harbor"
  },
  {
    value: "Mariner's Harbor"
  },
  {
    value: 'Meiers Corners'
  },
  {
    value: 'Midland Beach'
  },
  {
    value: 'New Brighton'
  },
  {
    value: 'New Dorp'
  },
  {
    value: 'New Dorp Beach'
  },
  {
    value: 'New Springville'
  },
  {
    value: 'Oakwood'
  },
  {
    value: 'Old Town'
  },
  {
    value: 'Park Hill'
  },
  {
    value: 'Pleasant Plains'
  },
  {
    value: 'Port Ivory'
  },
  {
    value: 'Port Richmond'
  },
  {
    value: "Prince's Bay"
  },
  {
    value: "Prince's Bay"
  },
  {
    value: 'Randall Manor'
  },
  {
    value: 'Richmond Town'
  },
  {
    value: 'Richmond Valley'
  },
  {
    value: 'Rosebank'
  },
  {
    value: 'Rossville'
  },
  {
    value: 'Shore Acres'
  },
  {
    value: 'Silver Lake'
  },
  {
    value: 'South Beach'
  },
  {
    value: 'St. George'
  },
  {
    value: 'Stapleton'
  },
  {
    value: 'Todt Hill'
  },
  {
    value: 'Tompkinsville'
  },
  {
    value: 'Tottenville'
  },
  {
    value: 'West Brighton'
  },
  {
    value: 'Westerleigh'
  },
  {
    value: 'Willowbrook'
  },
  {
    value: 'Woodrow'
  },
];

const neighborhoods = [
  {
    id: "home-v",
    title: "Bronx",    
    value: bronxInfo
  },
  {
    id: "profile-v",
    title: "Brooklyn",
    value: brooklynInfo
  },
  {
    id: "messages-v",
    title: "Manhattan",
    value: manhattanInfo
  },
  {
    id: "settings-v",
    title: "Queens",
    value: queensInfo
  },
  {
    id: "staten-v",
    title: "Staten Island",
    value: statenIslandInfo
  }
];
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
                          <li><button data-target="#staten-v" data-toggle="tab">Staten Island</button></li>
                        </ul>
                        <div className="tab-content">
                        {
                          neighborhoods.map(neighborhood=> {
                            let half_count = Math.round(neighborhood.value.length / 2);
                            const neighborhood1 = neighborhood.value.slice(0, half_count);
                            const neighborhood2 = neighborhood.value.slice(half_count, neighborhood.value.length-1);
                            const id = neighborhood.id;
                            return(
                              <div className={neighborhoods[0].id==neighborhood.id?"tab-pane active": "tab-pane"} id={neighborhood.id}>
                                <div className="col-md-6">
                                  {
                                    neighborhood1.map((item, index)=>
                                      <form className="form-group1">
                                        <input type="checkbox" id={id+index} value={item.value} onChange={(e)=>alert(e.target.value)}/>
                                        <label for={id+index}>{item.value}</label>
                                      </form>
                                    )
                                  }
                                </div>
                                <div className="col-md-6">
                                  {neighborhood2.map((item, index)=>
                                    <form className="form-group1">
                                      <input type="checkbox" id={id+(index + half_count)} value={item.value}/>
                                      <label for={id+(index + half_count)}>{item.value}</label>
                                    </form>
                                  )}
                                </div>
                              </div>                                 
                            )
                          }
                          )
                        }
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
                            <button id="cats" onClick={()=>this.handlePets("Cats Allowed", "cats")}>Cats Allowed</button>
                          </div>
                          <div className="pets_redio">
                            <button id="dogs" onClick={()=>this.handlePets("Dogs Allowed", "dogs")}>Dogs Allowed</button>
                          </div>
                          <div className="pets_redio">
                            <button id="cats_dogs" onClick={()=>this.handlePets("Cats and Dogs Allowed", "cats_dogs")}>Cats and Dogs Allowed</button>
                          </div>
                          <div className="pets_redio">
                            <button id="case" onClick={()=>this.handlePets("Case by Case", "case")}>Case by Case</button>
                          </div>
                          <div className="pets_redio">
                            <button id="nopets" onClick={()=>this.handlePets("No Pets Allowed", "nopets")}>No Pets Allowed</button>
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
