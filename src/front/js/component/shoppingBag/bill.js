import React from "react";
import "../../../styles/shoppingBag/bill.css";

const Bill = () => {
  return (
    <section className="bill_section">
      <div className="bill_title">
        <h5>Your Order</h5>
      </div>
      <div className="bill_container">
        <div className="bill_firstSection">
          <div>
            <p>Subtotal</p>
            <p>€5.99</p>
          </div>
          <div>
            <p>Shipment</p>
            <p>€3.99</p>
          </div>
        </div>
        <div className="bill_secondSection">
          <div>
            <p>Discount</p>
            <p>€0</p>
          </div>
          <div>
            <p>Total</p>
            <p>€9.99</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bill;
