import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";

function Filter({movieprop}) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  
  const getSuggestions = (value) => {
    console.log(typeof(value));
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? []: movieprop.filter(
          (Mov) =>
            Mov.title.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.title;

  const renderSuggestion = (suggestion) => <div class="suggestionMi3z">{suggestion.title}</div>;

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {

		console.log(value)
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Type a Movie Name",
    value,
    onChange
  };
  return (
    <div style={{ padding: "20px 0" }}>
      <label style={{display: "block", textAlign: "center", fontSize: "20px"}}>Search For Your Favorite Movie : </label>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </div>
  );
}

export default Filter;
