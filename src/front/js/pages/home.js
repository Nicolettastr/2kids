import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import S1_Home from "../component/s1_Home";
import S2_Home from "../component/s2_Home";
import S3_Home from "../component/s3_Home";
import S4_Home from "../component/s4_Home";
import S5_Home from "../component/s5_Home";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 ">
      <S1_Home />
      <S2_Home />
      <S3_Home />
      <S4_Home />
      <S5_Home />
    </div>
  );
};
