import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

const Header = ({ bookData, setBookData }) => {
  const categories = [
    "All",
    "Art",
    "Biography",
    "Computers",
    "History",
    "Medical",
    "Poerty",
  ];
  const sorting = ["Relevance", "Newest"];

  const [search, setSearch] = useState("");

  const searchForBook = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyDuaocJ59Hmp4qVO7W-ZvV9YfFMQHT9XBI" +
            "&maxResults=30"
        )
        .then((response) => setBookData(response.data.items))
        .catch((error) => console.log(error));
    }
  };

  return (
    <header>
      <div className="header-wrapper">
        <h1>Search for books</h1>
        <div className="form-wrapper">
          <form>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Enter title..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyPress={searchForBook}
            />

            <label htmlFor="category">Categories:</label>
            <select id="category" name="category">
              {categories.map((category) => (
                <option
                  value={category.toLowerCase()}
                  key={category.toLowerCase()}
                >
                  {category}
                </option>
              ))}
            </select>

            <label htmlFor="sorting">Sorting by:</label>
            <select id="sorting" name="sorting">
              {sorting.map((sortItem) => (
                <option
                  value={sortItem.toLowerCase()}
                  key={sortItem.toLowerCase()}
                >
                  {sortItem}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
