import React from "react";
import MapWithAMarker from "../../components/MapWithAMarker";

const DefaultMap = (props) => {
  const { mylocation, CardVisible } = props;
  return mylocation.lat && !CardVisible ? (
    <MapWithAMarker
      mapcenter={mylocation}
      sessionVenue={{}}
      selectedMarker={mylocation}
      photographers={[]}
      markers={[]}
      onClick={() => {}}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: "100%", flex: 1 }} />}
      mapElement={<div style={{ height: `300px`, marginBottom: "10px" }} />}
    />
  ) : null;
};

export default DefaultMap;
