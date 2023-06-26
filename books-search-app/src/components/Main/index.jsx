import { Cards } from "../../components";

import "./styles.css";

const Main = ({ bookData, checkForImage, search, setBookData }) => {
  return (
    <main>
      <div className="card-container">
        <Cards bookData={bookData} checkForImage={checkForImage} search={search} setBookData={setBookData} />
      </div>
    </main>
  );
};

export default Main;
