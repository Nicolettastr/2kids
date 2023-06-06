import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const trash = <FontAwesomeIcon className="products_icon" icon={faTrash} />;
  const edit = <FontAwesomeIcon className="products_icon" icon={faPencil} />;

  return (
    <div className="product_card flex-center">
      <figure className="product_img">
        <img src="https://image.yfswebstatic.com/fit-in/950x950/origin/product/009798000904/60f7dd17236a7.jpg" />
      </figure>
      <div className="product_name">
        <h2>Product name</h2>
        <p>16.66€</p>
        <div>
          {trash}
          {edit}
        </div>
      </div>
    </div>
  );
};

export default Product;
