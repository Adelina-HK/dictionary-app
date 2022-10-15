import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");
  let [photos, setPhotos] = useState("");

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsAPIKey =
      "563492ad6f9170000100000177cba5282e9d4c028b3957c843456409";
    let pexelsAPIUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    axios
      .get(pexelsAPIUrl, {
        headers: { Authorization: `Bearer ${pexelsAPIKey}` },
      })
      .then(handlePexelResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      {" "}
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus="on"
          placeholder="Type your word.."
          onChange={handleKeywordChange}
          className="inputForm"
        />
      </form>
      <div className="hint">suggested words: forest, sunset, yoga,..</div>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
