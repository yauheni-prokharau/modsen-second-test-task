import { useContext } from "react";

import { Cards, Loader } from "@components";
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
          <Cards />
        </div>
      )}
    </main>
  );
};

export default Main;
