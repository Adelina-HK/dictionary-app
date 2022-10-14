import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="row keyword">
          <div className="col-sm-4">
            <h2>{props.results.word}</h2>
          </div>
          <div className="col-sm-4">
            <h2>{props.results.phonetic}</h2>
          </div>
          <div className="col-sm-4">
            {props.results.phonetics.map( function (phonetic, index){
              return(
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
          </div>
        </section>
        <div className="meanings">
          <h3>
            {props.results.meanings.map(function(meaning, index) {
              return (
                <section key={index}>
                  <Meaning meaning={meaning} />
                </section>
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
