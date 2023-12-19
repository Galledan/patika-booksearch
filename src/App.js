import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Book from "./components/Book";

function App() {
  const [searchedBook, setSearchedBook] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    const res = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + searchedBook
    );
    setBooks(res.data.items);
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header>
        <h1>Book Search React</h1>
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="Book Title..."
            onChange={(e) => setSearchedBook(e.target.value)}
          />
          <button onClick={searchBooks}>
            <i class="fas fa-search"></i>
          </button>
        </div>
      </header>
      {/* Books Section */}
      <div className="books-container">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors || []}
            thumbnail={
              book.volumeInfo.imageLinks?.thumbnail ||
              "https://via.placeholder.com/150"
            }
            info={book.volumeInfo.infoLink}
          />
        ))}
      </div>
      {/* Footer Section */}
      <footer>
        <p>Created by: Onur Çelikler</p>
      </footer>
    </div>
  );
}

export default App;
