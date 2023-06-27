import React from "react";
import axios from "axios";

import { categories, sorting, maxResults } from "../../constants";

import "./styles.css";

const Header = ({
  setBookData,
  search,
  setSearch,
  sortBy,
  setSortBy,
  searchCategory,
  setSearchCategory,
  setIsLoading,
}) => {
  const handleSetSearchCategory = (event) => {
    setSearchCategory(event.target.value);
  };

  const handleSetSortBy = (event) => setSortBy(event.target.value);

  const handleSetSearch = (event) => setSearch(event.target.value);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchForBook();
    }
  };

  const searchForBook = () => {
    if (search) {
      setIsLoading(true);

      axios
        .get(
          import.meta.env.VITE_GOOGLE_BOOKS_API_URI +
            search +
            "+subject:" +
            searchCategory +
            "&orderBy=" +
            sortBy +
            "&key=" +
            import.meta.env.VITE_API_KEY +
            "&maxResults=" +
            maxResults
        )
        .then((response) => {
          setBookData(response.data.items);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          alert(error);
        });
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
            <select
              id="category"
              name="category"
              value={searchCategory}
              onChange={handleSetSearchCategory}
            >
              {categories.map((category) => (
                <option value={category.value} key={category.value}>
                  {category.categoryName}
                </option>
              ))}
            </select>

            <label htmlFor="sorting">Sorting by:</label>
            <select
              id="sorting"
              name="sorting"
              value={sortBy}
              onChange={handleSetSortBy}
            >
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
