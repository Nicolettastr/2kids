import React from "react";
import "../../../styles/s3_home.css";

const S3_Home = () => {
  const description = [
    {
      h2: "Shop Second-hand And Save Money",
      p: "Enjoy the best prices on gently used baby and mom products. Save money while still getting everything your family needs.",
      img: "https://ae01.alicdn.com/kf/H3378ea51bc454da49b4e74e75fe1b81c3/Conjunto-de-ropa-con-estampado-de-flores-para-reci-n-nacidos-pelele-pantalones-diadema-Kawaii-2021.jpg_Q90.jpg_.webp",
      class: "first",
    },
    {
      h2: "Buy new products with peace of mind.",
      p: "Get the newest products for your baby and yourself, all while knowing you are making a smart financial decision.",
      img: "https://www.zoyafashion.es/userdata/public/gfx/8846/conjuntos-bebe-nino%2C-conjuntos-para-ninos%2C-conjuntos-para-bebes%2C-conjuntos-de-bebe%2C-conjuntos-de-ropa-de-vestir-para-ninos%2C-conjunto-nino-ceremonia.webp",
      class: "second",
    },
  ];

  const section = description.map((item, index) => {
    return (
      <section key={index} className={`home_${item.class}Description`}>
        <div className={`home_${item.class}Img_Border`}>
          <h2 className="title">{item.h2}</h2>
          <div className={`home_${item.class}Image`}>
            <figure>
              <img src={item.img} alt="baby cloth picture" />
            </figure>
            <p className="flex-center">{item.p}</p>
          </div>
        </div>
      </section>
    );
  });

  return <>{section}</>;
};

export default S3_Home;
