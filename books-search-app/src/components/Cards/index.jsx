import React, { useState } from "react";
import axios from "axios";

import { Card } from "../../components";
import { maxResults } from "../../constants";

import "./styles.css";

const Cards = ({ bookData, checkForImage, search, setBookData }) => {
  const [startIndex, setStartIndex] = useState(0);

  const showLoadMoreButton =
    bookData.length > 0 && bookData.length % maxResults === 0;

  const handleLoadMore = () => {
    const nextStartIndex = startIndex + maxResults;

    axios
      .get(
        `${import.meta.env.VITE_GOOGLE_BOOKS_API_URI}${search}&key=${
          import.meta.env.VITE_API_KEY
        }&startIndex=${nextStartIndex}&maxResults=${maxResults}`
      )
      .then((response) => {
        const newBooks = response.data.items;

        setStartIndex(nextStartIndex);
        setBookData((prevBookData) => [...prevBookData, ...newBooks]);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const getShortBookTitle = (title) => {
    let words = title.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + "...";
    }

    return title;
  };

  return (
    <div className="card-wrapper">
      {bookData.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let category = item.volumeInfo.categories;
        let title = item.volumeInfo.title;
        let name = getShortBookTitle(title);
        let author =
          item.volumeInfo.authors && item.volumeInfo.authors.length == 1
            ? item.volumeInfo.authors
            : item.volumeInfo.authors && item.volumeInfo.authors.join(", ");
        let index = bookData.indexOf(item);
        let id = item.id;

        return (
          <Card
            key={index}
            checkForImage={checkForImage}
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
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      )}
    </div>
  );
};

export default Cards;
