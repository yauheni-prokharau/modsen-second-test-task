import React, { createContext, useState, useEffect } from "react";

import bookSvg from "../assets/images/blue-book.svg";

import { categories, sorting } from "../constants";

export const AppContext = createContext([]);

export const AppProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(sorting[0]);
  const [searchCategory, setSearchCategory] = useState(categories[0].value);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const checkForImage = (image) => {
    if (!image) {
      return <img className="svg" src={bookSvg} alt="book" />;
    }

    return <img src={image} alt="book" />;
  };

  return (
    <AppContext.Provider
      value={{
        bookData,
        setBookData,
        search,
        setSearch,
        sortBy,
        setSortBy,
        searchCategory,
        setSearchCategory,
        isLoading,
        setIsLoading,
        checkForImage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
