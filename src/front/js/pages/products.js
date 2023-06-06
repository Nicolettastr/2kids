import React, { useContext } from "react";
import "../../styles/products/products.css";
import { Context } from "../store/appContext";
import Button from "../component/tags/button";
import Product from "../component/products/product";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <section className="products_section flex-center">
      <div className="products_newProduct">
        {store.newProduct ? navigate("/newProduct") : ""}
        <Button onclick={actions.handleNewProduct} name="New"></Button>
      </div>
      <div className="products_container flex-center">
        <h2>My Products</h2>
        <div className="products_info">
          <Product />
        </div>
      </div>
    </section>
  );
};

export default Products;
