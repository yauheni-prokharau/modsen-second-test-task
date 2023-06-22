import { Card } from "../../components";

import "./styles.css";

const Main = ({ bookData, checkForImage }) => {
  return (
    <main>
      <div className="card-container">
        <Card bookData={bookData} checkForImage={checkForImage} />
      </div>
    </main>
  );
};

export default Main;
