import React, { createContext, useState, useEffect } from "react";

import bookSvg from "../assets/images/blue-book.svg";

import { categories, sorting } from "../constants";

export const AppContext = createContext([]);

export const AppProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState("");
  const [totalItems, setTotalItems] = useState(null);
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
