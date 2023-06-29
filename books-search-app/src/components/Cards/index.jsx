import React, { useState, useContext } from "react";
import axios from "axios";

import { Card, ButtonLoader } from "../../components";
import { maxResults } from "../../constants";
import { AppContext } from "../../context";

import "./styles.css";

const Cards = () => {
  const { bookData, search, setBookData, totalItems, sortBy, searchCategory } =
    useContext(AppContext);

  const [startIndex, setStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const showLoadMoreButton =
    bookData.length > 0 && bookData.length % maxResults === 0;

  const handleLoadMore = () => {
    const nextStartIndex = startIndex + maxResults;

    setIsLoading(true);

    axios
      .get(
        import.meta.env.VITE_GOOGLE_BOOKS_API_URI +
          search +
          "+subject:" +
          searchCategory +
          "&orderBy=" +
          sortBy +
          "&key=" +
          import.meta.env.VITE_API_KEY +
          "&startIndex=" +
          nextStartIndex +
          "&maxResults=" +
          maxResults
      )
      .then((response) => {
        const newBooks = response.data.items;

        setStartIndex(nextStartIndex);
        setBookData((prevBookData) => [...prevBookData, ...newBooks]);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  };

  const getShortBookTitle = (title) => {
    const words = title.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + "...";
    }

    return title;
  };

  return (
    <>
      <div className="found-books">
        {totalItems !== null && <h2>Found {totalItems} books</h2>}
      </div>
      <div className="card-wrapper">
        {bookData.map((item) => {
          const thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          const category = item.volumeInfo.categories;
          const title = item.volumeInfo.title;
          const name = getShortBookTitle(title);
          const author =
            item.volumeInfo.authors && item.volumeInfo.authors.length == 1
              ? item.volumeInfo.authors
              : item.volumeInfo.authors && item.volumeInfo.authors.join(", ");
          const index = bookData.indexOf(item);
          const id = item.id;

          return (
            <Card
              key={index}
              thumbnail={thumbnail}
              category={category}
              title={title}
              name={name}
              author={author}
              index={index}
              id={id}
            />
          );
        })}

        {showLoadMoreButton && (
          <div className="load-more">
            <button onClick={handleLoadMore} disabled={isLoading}>
              {isLoading ? <ButtonLoader /> : "Load more"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cards;
