import React from "react";
import "../../styles/s3_home.css";

const S3_Home = () => {
  return (
    <section className="home_firstDescription">
      <div className="home_firstImg_Border">
        <h2>Shop Second-hand And Save Money</h2>
        <div className="home_firstImage">
          <figure>
            <img
              src="https://img.freepik.com/foto-gratis/ropa-bebe-plana-camara-fotos_23-2148251497.jpg?size=626&ext=jpg&ga=GA1.1.1832098813.1668892518&semt=ais"
              alt="baby girls example cloth"
            />
          </figure>
          <p>
            Enjoy the best prices on gently used baby and mom products. Save
            money while still getting everything your family needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default S3_Home;
