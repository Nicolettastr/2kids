import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";

const Full = () => {
  return (
    <div className="shoppingBag_full">
      <h5 className="shoppingBag_title">Shopping Bag</h5>
      <div className="shoppingBag_productInfo">
        <h6>Product</h6>
        <div className="shoppingBag_productContainer">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2hVFeCZ6VDT_1lJR4wSOMNeYfEjHUbza6w&usqp=CAU"
              alt="babies pijama"
            />
          </figure>
          <div className="shoppingBag_productDescription">
            <p>Two baby pijamas</p>
            <p>0 - 3 ms</p>
          </div>
          <div className="shoppingBag_productIcon">
            <FontAwesomeIcon icon={faTrash} />
            <FontAwesomeIcon icon={faHeart} />
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Full;
