import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import bookSvg from "../../assets/images/book.svg";
import { Header, Main, BookInfo } from "../../components";

import "./styles.css";

const App = () => {
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState("");

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
                />
                <Main bookData={bookData} checkForImage={checkForImage} search={search} setBookData={setBookData} />
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
