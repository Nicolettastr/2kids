import React, { useContext, useState } from "react";
import "../../styles/products/newProduct.css";
import { Context } from "../store/appContext";
import ProductForm from "../component/productForm";
import { useNavigate } from "react-router-dom";

const newProduct = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const data = localStorage.getItem("user");
  const user = JSON.parse(data);
  const user_id = user.id;

  console.log(user_id);

  // this is the object that will be filled with the info typed by the user, this object has to be validated
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    subcategory: "",
    price: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    state: "",
    description: "",
    user_id: user_id,
  });

  //function that sets productData with the information pass by the user
  const handleChange = (ev) => {
    setProductData({ ...productData, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      {store.productCreatedSuccessfully ? (
        navigate("/products")
      ) : (
        <section className="newProduct_section flex-center">
          <h3>Publish New Product</h3>
          <div className="newProduct_container">
            <ProductForm
              productData={productData}
              handleValidate={(e) => actions.handleValidateForm(e, productData)}
              handleChange={handleChange}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default newProduct;
