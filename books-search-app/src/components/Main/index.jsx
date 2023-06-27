import { Cards } from "../../components";

import "./styles.css";

const Main = ({ bookData, checkForImage, search, setBookData, sortBy }) => {
  return (
    <main>
      <div className="card-container">
        <Cards
          bookData={bookData}
          checkForImage={checkForImage}
          search={search}
          setBookData={setBookData}
          sortBy={sortBy}
        />
      </div>
    </main>
  );
};

export default Main;
