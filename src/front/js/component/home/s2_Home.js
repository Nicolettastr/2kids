import React, { useContext } from "react";
import "../../../styles/home/s2_home.css";
import { Context } from "../../store/appContext";

const S2_Home = () => {
  const { store, actions } = useContext(Context);

  const option = store.categories.map((item, index) => {
    return (
      <div key={index} className="home_categoriesOptin">
        <div className="home_categoriesName">
          <p>{item.name}</p>
        </div>
      </div>
    );
  });

  return <section className="home_secondSection">{option}</section>;
};

export default S2_Home;
