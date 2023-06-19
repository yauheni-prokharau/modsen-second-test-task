import Header from "../Header/index";
import Main from "../Main/index";

import "./styles.css";

import React, { useState } from "react";

const App = () => {
  const [bookData, setBookData] = useState([]);

  return (
    <>
      <Header bookData={bookData} setBookData={setBookData} />
      <Main bookData={bookData} />
    </>
  );
};

export default App;
