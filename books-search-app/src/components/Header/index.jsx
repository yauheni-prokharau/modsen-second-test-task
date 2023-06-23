import React, { useState } from "react";
import axios from "axios";

import { categories, sorting } from "../../constants";

import "./styles.css";

const Header = ({ bookData, setBookData, search, setSearch }) => {
  const searchForBook = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      axios
        .get(
          import.meta.env.VITE_GOOGLE_BOOKS_API_URI +
            search +
            "&key=" +
            import.meta.env.VITE_API_KEY +
            "&maxResults=" +
            import.meta.env.VITE_MAX_RESULTS
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
