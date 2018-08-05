import React, {Component} from "react";
import GetFertilizer from "./getFertilizer";
import GoogleMaps from "../map/googleMaps";
import MyMapComponent from "../map/myMapComponent"
import axios from 'axios'

class Fertilizer extends Component {

  componentDidMount () {
    axios.get( 'http://localhost:3000/bins' )
    .then( response => {
        console.log(response)
    } )
    .catch( error => {
        console.log(error)
    } );

}

  render () {
    return (
      <div>
        <GetFertilizer />
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
};

export default Fertilizer;
