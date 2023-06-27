import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import bookSvg from "../../assets/images/blue-book.svg";
import { Header, Main, BookInfo } from "../../components";
import { sorting } from "../../constants";

import "./styles.css";

const App = () => {
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(sorting[0]);

  const checkForImage = (image) => {
    if (!image) {
      return <img className="svg" src={bookSvg} alt="book" />;
    }

    return <img src={image} alt="book" />;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  bookData={bookData}
                  setBookData={setBookData}
                  search={search}
                  setSearch={setSearch}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                />
                <Main
                  bookData={bookData}
                  checkForImage={checkForImage}
                  search={search}
                  setBookData={setBookData}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                />
              </>
            }
          />
          <Route
            path="/book/:index/:id"
            element={
              <BookInfo
                bookData={bookData}
                setBookData={setBookData}
                search={search}
                setSearch={setSearch}
                checkForImage={checkForImage}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
