import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function(photo, index) {
            return (
              <div className="col-4">
                <a
                  href={photo.src.original}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="images"
                    key={index}
                                     />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
