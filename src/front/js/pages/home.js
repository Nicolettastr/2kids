import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import S1_Home from "../component/s1_Home";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <S1_Home />
    </div>
  );
};
