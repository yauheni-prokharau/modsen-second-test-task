import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppProvider } from "@context";
import { home, bookInfo } from "@constants";
import { Home, BookInfo } from "@pages";
import { Header, ErrorBoundary } from "@components";

import "./styles.css";

const App = () => {
  return (
    <AppProvider>
      <ErrorBoundary>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path={home} element={<Home />} />
            <Route path={bookInfo} element={<BookInfo />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </AppProvider>
  );
};

export default App;
