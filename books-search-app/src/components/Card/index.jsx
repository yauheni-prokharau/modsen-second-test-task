import { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context";

import "./styles.css";

const Card = (props) => {
  const { checkForImage } = useContext(AppContext);

  return (
    <div className="card" key={props.id}>
      <Link className="card-link" to={`/book/${props.index}/${props.id}`}>
        <div className="img-wrapper">{checkForImage(props.thumbnail)}</div>
        <div className="card-description">
          <p className="category">{props.category}</p>
          <h3 className="name">{props.name}</h3>
          <p className="author">{props.author}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
