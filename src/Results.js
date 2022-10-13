import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="row keyword">
          <div className="col-sm-5">
            <h2>{props.results.word}</h2>
          </div>
          <div className="col-sm-5">
            <h2>{props.results.phonetic}</h2>
          </div>
          <div className="col-sm-2">
            {props.results.phonetics.map( function (phonetic, index){
              return(
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="meanings">
          <h3>
            {props.results.meanings.map(function(meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </h3>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
