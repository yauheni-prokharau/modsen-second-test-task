import { useContext } from "react";

import { CardList, Loader } from "@components";
import { AppContext } from "@context";

import "./styles.css";

const Main = () => {
  const { isLoading } = useContext(AppContext);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="card-container">
          <CardList />
        </div>
      )}
    </main>
  );
};

export default Main;
