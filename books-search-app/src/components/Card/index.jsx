import { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context";

import "./styles.css";

const Card = ({ id, index, thumbnail, category, name, author }) => {
  const { checkForImage } = useContext(AppContext);

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
};

export default Card;
