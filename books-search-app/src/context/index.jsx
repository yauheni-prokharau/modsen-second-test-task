import React, { createContext, useEffect, useReducer, useState } from "react";

import bookSvg from "../assets/images/blue-book.svg";
import { categories, sorting } from "../constants";

export const AppContext = createContext([]);

const initialState = {
  search: "",
  totalItems: null,
  sortBy: sorting[0],
  searchCategory: categories[0].value,
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_TOTAL_ITEMS":
      return { ...state, totalItems: action.payload };
    case "SET_SORT_BY":
      return { ...state, sortBy: action.payload };
    case "SET_SEARCH_CATEGORY":
      return { ...state, searchCategory: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const setSearch = (value) => dispatch({ type: "SET_SEARCH", payload: value });

  const setTotalItems = (value) =>
    dispatch({ type: "SET_TOTAL_ITEMS", payload: value });

  const setSortBy = (value) =>
    dispatch({ type: "SET_SORT_BY", payload: value });

  const setSearchCategory = (value) =>
    dispatch({ type: "SET_SEARCH_CATEGORY", payload: value });

  const setIsLoading = (value) =>
    dispatch({ type: "SET_IS_LOADING", payload: value });

  useEffect(() => {
    dispatch({ type: "SET_IS_LOADING", payload: false });
  }, []);

  const { search, totalItems, sortBy, searchCategory, isLoading } = state;

  const checkForImage = (image) => {
    if (!image) {
      return <img className="svg" src={bookSvg} alt="book" />;
    }

    return <img src={image} alt="book" />;
  };

  const getShortBookTitle = (title) => {
    const words = title.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + "...";
    }

    return title;
  };

  const getBookData = () =>
    bookData.map((item) => {
      const thumbnail =
        item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
      const category = item.volumeInfo.categories;
      const title = item.volumeInfo.title;
      const name = getShortBookTitle(title);
      const author =
        item.volumeInfo.authors && item.volumeInfo.authors.length == 1
          ? item.volumeInfo.authors
          : item.volumeInfo.authors && item.volumeInfo.authors.join(", ");
      const index = bookData.indexOf(item);
      const id = item.id;
      const description = item.volumeInfo.description;

      return {
        thumbnail,
        category,
        title,
        name,
        author,
        index,
        id,
        description,
      };
    });

  return (
    <AppContext.Provider
      value={{
        bookData,
        setBookData,
        search,
        setSearch,
        totalItems,
        setTotalItems,
        sortBy,
        setSortBy,
        searchCategory,
        setSearchCategory,
        isLoading,
        setIsLoading,
        checkForImage,
        getBookData,
        getShortBookTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
