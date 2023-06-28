import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Main, BookInfo } from "../../components";
import { AppProvider } from "../../context";

import "./styles.css";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
          <Route path="/book/:index/:id" element={<BookInfo />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
