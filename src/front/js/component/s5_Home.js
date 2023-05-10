import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "../../styles/s5_home.css";

const S5_Home = () => {
  return (
    <section className="home_reviewSection">
      <div>
        <p>
          "The buying experience was so easy and the quality of the products was
          great."
        </p>
        <p>
          <span>
            <FontAwesomeIcon className="review_icon" icon={faCircleUser} />
          </span>{" "}
          Alice White
        </p>
      </div>
    </section>
  );
};

export default S5_Home;
