import React from "react";
import axios from "axios";

import { categories, sorting, maxResults } from "../../constants";

import "./styles.css";

const Header = ({ setBookData, search, setSearch }) => {
  const handleSetSearch = (event) => setSearch(event.target.value);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchForBook();
    }
  };

  const searchForBook = () => {
    if (search) {
      axios
        .get(
          import.meta.env.VITE_GOOGLE_BOOKS_API_URI +
            search +
            "&key=" +
            import.meta.env.VITE_API_KEY +
            "&maxResults=" +
            maxResults
        )
        .then((response) => setBookData(response.data.items))
        .catch((error) => alert(error));
    }
  };

  return (
    <header>
      <div className="header-wrapper">
        <h1>Search for books</h1>
        <div className="form-wrapper">
          <form>
            <div className="input-wrapper">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Enter title..."
                value={search}
                onChange={handleSetSearch}
                onKeyPress={handleKeyPress}
              />

              <button
                className="search-button"
                type="button"
                onClick={searchForBook}
              >
                Search 🔎
              </button>
            </div>

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
