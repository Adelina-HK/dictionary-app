import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
    </div>
  );
}
