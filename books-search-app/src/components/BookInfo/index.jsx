import { useParams } from "react-router-dom";

import { Header } from "../../components";

import "./styles.css";

const BookInfo = ({
  bookData,
  setBookData,
  search,
  setSearch,
  checkForImage,
  sortBy,
  setSortBy,
}) => {
  const { index } = useParams();
  const bookIndex = parseInt(index);
  const currentBook = bookData[bookIndex];

  let name = currentBook.volumeInfo.title;
  let thumbnail =
    currentBook.volumeInfo.imageLinks &&
    currentBook.volumeInfo.imageLinks.smallThumbnail;
  let category = currentBook.volumeInfo.categories;
  let author =
    currentBook.volumeInfo.authors && currentBook.volumeInfo.authors.length == 1
      ? currentBook.volumeInfo.authors
      : currentBook.volumeInfo.authors &&
        currentBook.volumeInfo.authors.join(", ");
  let description = currentBook.volumeInfo.description;

  return (
    <>
      <Header
        bookData={bookData}
        setBookData={setBookData}
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <main>
        <div className="book-container">
          <div className="image">{checkForImage(thumbnail)}</div>
          <div className="book-info">
            <p className="book-category">{category}</p>
            <h2 className="book-name">{name}</h2>
            <p className="book-author">{author}</p>
            <p className="book-description">{description}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookInfo;
