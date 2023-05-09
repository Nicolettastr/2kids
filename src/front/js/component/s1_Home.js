import React, { useContext } from "react";
import "../../styles/s1_home.css";
import { Context } from "../store/appContext";

const S1_Home = () => {
  const { store } = useContext(Context);

  return (
    <section
      className={
        store.windowsWidth < "336"
          ? "home_firstSection home"
          : "home_firstSection"
      }
    >
      <div className="home_bannerImage">
        <div>
          <h2 className="p_1">Shop With Easy For Moms And Babies.</h2>
          <p className={store.windowsWidth < "700" ? "inactive p_1" : "p_1"}>
            Find affordable and high-quality products for your little ones, both
            new and gently used.
          </p>
        </div>
      </div>
      <p
        className={
          store.windowsWidth > "700" ? "inactive" : "home_bannerInfo p_1"
        }
      >
        Find affordable and high-quality products for your little ones, both new
        and gently used.
      </p>
    </section>
  );
};

export default S1_Home;
