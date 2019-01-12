import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BounceLoader } from 'react-spinners';

// import mapboxgl from 'mapbox-gl'
// mapboxgl.accessToken = 'pk.eyJ1IjoicmV5ZXNlbHNhbWFkIiwiYSI6ImNqcWg3NWs0MDBpaXMzeHFqZGNpd2VnODEifQ.mLXE6QDGRc2bqLb7tx5ogw';

let map;

const Loader = BounceLoader;

@observer
class ListingsMapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pageSize: 10,
      currentPage: 0,
      lng: 5,
      lat: 34,
      zoom: 1.5,
      stores: { "type": "FeatureCollection", "features": this.props.listings },
      coordinates: [5, 34]
    };
  }

  // componentWillReceiveProps(props) {
  //   console.log("checking Props", props);
  //   if (map&&(this.props!=props||!this.props.address||props.nMove==false)&&props.address) {
  //       map.flyTo({
  //         center: props.address.properties.coordinates,
  //         zoom: 9
  //       })         
  //   }
  // }

  // componentDidMount() {
  //   if (this.props.onMount) this.props.onMount();
  //   let that = this;
  //   const { lng, lat, zoom } = this.state;

  //   map = new mapboxgl.Map({
  //     container: this.mapContainer,
  //     style: 'mapbox://styles/mapbox/light-v9',
  //     center: [lng, lat],
  //     zoom
  //   });
  //   let stores1 = this.props.stores;
  //   map.on("load", function () {
  //     map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
  //         if (error) throw error;
  //         map.addImage("custom-marker", image);
  //         map.addLayer({
  //           id: "markers",
  //           type: "symbol",
  //           source: {
  //             type: "geojson",
  //             data: that.state.stores
  //           },
  //           layout: {
  //             "icon-image": "custom-marker",
  //           }
  //         });
  //       });
  //   });

  //   map.on('move', () => {
  //     const { lng, lat } = map.getCenter();
  //     this.setState({
  //       lng: lng.toFixed(4),
  //       lat: lat.toFixed(4),
  //       zoom: map.getZoom().toFixed(2)
  //     });
  //   });

   
  //   map.on('click', function(e) {
  //     let features = map.queryRenderedFeatures(e.point, { layers: ['markers'] });
  //     if (features.length) {
  //       let clickedPoint = features[0]; 
  //       map.flyTo({
  //         center: JSON.parse(clickedPoint.properties.coordinates),
  //         zoom: 9
  //       });
  //       let activeItem = document.getElementsByClassName('active');
  //       if (activeItem[0]) {
  //         activeItem[0].classList.remove('active');
  //       }
  //       let selectedFeature = clickedPoint.properties.address;
  //       that.props.selectListings(selectedFeature);
  //     }
  //   });
  // }

  // flyToStore=currentFeature=> {
  //   map.flyTo({
  //     center: currentFeature.properties.coordinates,
  //     zoom: 9
  //   });
  // }
  render() {
    return (
      <div style={{width: '100%', float: 'right', height: '100%'}}>
        {/* <div ref={el => this.mapContainer = el} id="map"  /> */}
      </div>
    );
  }
}

export default ListingsMapContainer;
