import React from "react";
import "./App.css";
import book from "./book.png";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <img src={book} className="img-book m-2" alt="book pic" />
            Dictionary{" "}
          </h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center mt-5">
          <small>Coded by Adelina Hetman</small>
          <div>
            {" "}
            <small>
              {" "}
              and is open-sourced on{" "}
              <a
                href="https://github.com/Adelina-HK/dictionary-app"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>{" "}
              and also hosted on{" "}
              <a
                href="https://sparkling-daifuku-ed4542.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Netlify
              </a>
            </small>
          </div>
        </footer>
      </div>
    </div>
  );
}
