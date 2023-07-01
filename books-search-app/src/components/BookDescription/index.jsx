import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { AppContext } from "@context";
import { home } from "@constants";

import "./styles.css";

const BookDescription = () => {
  const { bookData, checkForImage, getBookData } = useContext(AppContext);

  const { index } = useParams();
  const bookIndex = parseInt(index);

  const currentBook = getBookData(bookData)[bookIndex];
  const { thumbnail, category, name, author, description } = currentBook;

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(home);
  };

  return (
    <main>
      <div className="book-container">
        <div className="book-image">{checkForImage(thumbnail)}</div>
        <div className="book-info">
          <p className="book-category">{category}</p>
          <h2 className="book-name">{name}</h2>
          <p className="book-author">{author}</p>
          <p className="book-description">{description}</p>
        </div>
      </div>
      <div className="go-home">
        <button onClick={handleGoHome}>Go Home</button>
      </div>
    </main>
  );
};

export default BookDescription;
