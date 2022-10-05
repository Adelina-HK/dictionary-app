import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

function handleResponse(response){
  
}

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition...`);
  
    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/star";
  axios.get(apiUrl).then(handleReponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus="on"
          placeholder="Type your word.."
          onChange={handleKeywordChange}
          className="inputForm"
        />
      </form>
    </div>
  );
}
