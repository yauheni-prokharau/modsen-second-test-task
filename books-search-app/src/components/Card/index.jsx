import "./styles.css";

const Card = ({ bookData }) => {
  return (
    <>
      {bookData.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let category = item.volumeInfo.categories;
        let name = item.volumeInfo.title;
        let author =
          item.volumeInfo.authors && item.volumeInfo.authors.length == 1
            ? item.volumeInfo.authors
            : item.volumeInfo.authors && item.volumeInfo.authors.join(", ");

        return (
          <div className="card">
            <div className="img-wrapper">
              <img src={thumbnail} alt="book" />
            </div>
            <div className="card-description">
              <p className="category">{category}</p>
              <h3 className="name">{name}</h3>
              <p className="author">{author}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
