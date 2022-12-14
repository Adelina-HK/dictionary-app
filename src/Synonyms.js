import React from "react";

export default function Synonyms(props) {
   if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          {props.synonyms.map(function(synonyms, index) {
            return (
              <li key={index}>
                <strong>Synonyms: </strong>
                {synonyms}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
