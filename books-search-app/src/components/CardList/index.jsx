import React, { useState, useContext } from "react";

import { Card, ButtonLoader } from "@components";
import { maxResults } from "@constants";
import { AppContext } from "@context";
import { fetchBooks } from "@api";

import "./styles.css";

const CardList = () => {
  const {
    bookData,
    search,
    setBookData,
    totalItems,
    sortBy,
    searchCategory,
    getBookData,
  } = useContext(AppContext);

  const [startIndex, setStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const showLoadMoreButton =
    bookData.length > 0 && bookData.length % maxResults === 0;

  const handleLoadMore = async () => {
    const nextStartIndex = startIndex + maxResults;

    setIsLoading(true);

    try {
      const response = await fetchBooks(
        search,
        searchCategory,
        sortBy,
        nextStartIndex,
        maxResults
      );

      const newBooks = response.items;

      setStartIndex(nextStartIndex);
      setBookData((prevBookData) => [...prevBookData, ...newBooks]);
      setIsLoading(false);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  const cardList = getBookData();

  return (
    <>
      <div className="found-books">
        {totalItems !== null && <h2>Found {totalItems} books</h2>}
      </div>
      <div className="card-wrapper">
        {cardList.map((item) => {
          const { thumbnail, category, title, name, author, index, id } = item;
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

export default CardList;
