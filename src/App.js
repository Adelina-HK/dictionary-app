import "./App.css";
import book from "./book.png";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="m-2">
            <img src={book} className="img-book m-2" alt="book pic" />
            Dictionary{" "}
          </h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center mt-5">
          <small>Coded by Adelina Hetman</small>
        </footer>
      </div>
    </div>
  );
}
