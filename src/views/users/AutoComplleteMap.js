import React from "react";
import Autocomplete from "react-google-autocomplete";
const AutoCompletePlaces = (props) => {
  return (
    <Autocomplete
      placeholder="enter location"
      apiKey={`${process.env.REACT_APP_API_KEY}`}
      style={{
        width: "100%",
        color: "grey",
        borderWidth: "1px",
        borderColor: "silver",
        height: "35px",
      }}
      onPlaceSelected={(place) => props.handleplaces(place)}
      types={["address"]}
      componentRestrictions={{ country: "ng" }}
    />
  );
};

export default AutoCompletePlaces;
