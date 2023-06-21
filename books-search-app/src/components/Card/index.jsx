import { Link } from "react-router-dom";

import "./styles.css";

const Card = ({ bookData, checkForImage }) => {
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
          <div className="card" key={id}>
            <Link className="card-link" to={`/book/${index}/${id}`}>
              <div className="img-wrapper">{checkForImage(thumbnail)}</div>
              <div className="card-description">
                <p className="category">{category}</p>
                <h3 className="name">{name}</h3>
                <p className="author">{author}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
