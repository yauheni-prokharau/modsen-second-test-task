import { Link } from "react-router-dom";

import "./styles.css";

const Card = (props) => {
  return (
    <div className="card" key={props.id}>
      <Link className="card-link" to={`/book/${props.index}/${props.id}`}>
        <div className="img-wrapper">
          {props.checkForImage(props.thumbnail)}
        </div>
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
