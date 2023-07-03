import React, { useContext } from "react";

import { categories, sorting, maxResults } from "@constants";
import { AppContext } from "@context";
import { fetchBooks } from "@api";

import "./styles.css";

const Header = () => {
  const {
    setBookData,
    search,
    setSearch,
    setTotalItems,
    sortBy,
    setSortBy,
    searchCategory,
    setSearchCategory,
    setIsLoading,
  } = useContext(AppContext);

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

  const searchForBook = async () => {
    if (search) {
      setIsLoading(true);

      try {
        const response = await fetchBooks(
          search,
          searchCategory,
          sortBy,
          maxResults
        );

        setBookData(response.items);
        setTotalItems(response.totalItems);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        alert(error);
      }
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

            <div className="sorting-wrapper">
              <label htmlFor="category">Categories:</label>
              <select
                id="category"
                name="category"
                value={searchCategory}
                onChange={handleSetSearchCategory}
              >
                {categories.map(({ value, categoryName }) => (
                  <option value={value} key={value}>
                    {categoryName}
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
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
