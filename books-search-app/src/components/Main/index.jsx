import { Cards } from "../../components";

import "./styles.css";

const Main = ({ bookData, checkForImage }) => {
  return (
    <main>
      <div className="card-container">
        <Cards bookData={bookData} checkForImage={checkForImage} />
      </div>
    </main>
  );
};

export default Main;
