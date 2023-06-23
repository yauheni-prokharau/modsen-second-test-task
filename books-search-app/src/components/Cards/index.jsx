import { Card } from "../../components";

import "./styles.css";

const Cards = ({ bookData, checkForImage }) => {
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
            key={id}
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
    </div>
  );
};

export default Cards;
