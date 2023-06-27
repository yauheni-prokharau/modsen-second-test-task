import { Cards, Loader } from "../../components";

import "./styles.css";

const Main = ({
  bookData,
  checkForImage,
  search,
  setBookData,
  sortBy,
  searchCategory,
  setSearchCategory,
  isLoading,
}) => {
  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="card-container">
          <Cards
            bookData={bookData}
            checkForImage={checkForImage}
            search={search}
            setBookData={setBookData}
            sortBy={sortBy}
            searchCategory={searchCategory}
            setSearchCategory={setSearchCategory}
          />
        </div>
      )}
    </main>
  );
};

export default Main;
