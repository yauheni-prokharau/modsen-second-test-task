import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../Header/index";
import Main from "../Main/index";
import BookInfo from "../BookInfo/index";

import "./styles.css";

const App = () => {
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState("");

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
                <Main bookData={bookData} />
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
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
