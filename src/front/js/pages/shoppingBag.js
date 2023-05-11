import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/shoppingBag/shoppingBag.css";
import babies from "../../img/babies.png";
import Button from "../component/tags/button";
import Full from "../component/shoppingBag/full";
import Bill from "../component/shoppingBag/bill";

const ShoppingBag = () => {
  const { store, actions } = useContext(Context);

  return (
    <section
      className={
        store.shoppingBag.length === 0
          ? "shoppingBag_section empty"
          : "shoppingBag_section"
      }
    >
      {store.shoppingBag.length === 0 ? (
        <div className="shoppingBag_empty flex-center">
          <figure>
            <img src={babies} alt="baby growing" />
          </figure>
          <h3>Your Shopping Bag Is Empty</h3>
          <Button name="Go Shopping"></Button>
        </div>
      ) : (
        <>
          <Full />
          <Bill />
          <div className="shoppingBag_button">
            <Button name="Complete Order"></Button>
          </div>
        </>
      )}
    </section>
  );
};

export default ShoppingBag;
