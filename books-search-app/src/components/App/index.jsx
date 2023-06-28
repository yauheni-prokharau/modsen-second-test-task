import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppProvider } from "../../context";
import { home, bookInfo } from "../../constants";
import { Home, BookInfo } from "../../pages";

import "./styles.css";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={bookInfo} element={<BookInfo />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
