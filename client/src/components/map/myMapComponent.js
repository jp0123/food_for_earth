import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: -35.3073335, lng: 149.103467 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -35.3174168, lng: 149.1025476 }} />}
    {props.isMarkerShown && <Marker position={{ lat: -35.3073335, lng: 149.103467 }} />}
    {props.isMarkerShown && <Marker position={{ lat: -35.3321911, lng: 149.0771247 }} />}
    {props.isMarkerShown && <Marker position={{ lat: -35.3335892, lng: 149.0925786 }} />}
    {props.isMarkerShown && <Marker position={{ lat: -35.3238859, lng: 149.1245898 }} />}
  </GoogleMap>
))

export default MyMapComponent

