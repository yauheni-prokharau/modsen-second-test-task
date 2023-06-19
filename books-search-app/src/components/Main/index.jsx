import Card from "../Card/index";

import "./styles.css";

const Main = ({ bookData }) => {
  return (
    <main>
      <div className="card-container">
        <Card bookData={bookData} />
      </div>
    </main>
  );
};

export default Main;
