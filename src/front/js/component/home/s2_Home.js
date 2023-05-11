import React from "react";
import "../../../styles/home/s2_home.css";

const S2_Home = () => {
  const categories = [
    {
      name: "Clothes And Shoes",
      image:
        "https://img.freepik.com/foto-gratis/lindo-bebe_624325-1656.jpg?size=626&ext=jpg&ga=GA1.1.1832098813.1668892518&semt=ais",
    },
    {
      name: "Toys",
      image:
        "https://img.freepik.com/foto-gratis/bebe-jugando-carro-madera_53876-70985.jpg?w=740&t=st=1683655672~exp=1683656272~hmac=3df6a7ec6e3fc2a287fcd140c49e0fbb5d23277888e694bf52ceeb6208fb14d6",
    },
    {
      name: "Accesories",
      image:
        "https://img.freepik.com/foto-gratis/fondo-azul-claro-bebe-elementson_1220-4301.jpg?w=740&t=st=1683656758~exp=1683657358~hmac=82813314ed54e891f0ae7436ea24d0406b8ef8017f1100b115a10986c1033fac",
    },
    {
      name: "Care Items",
      image:
        "https://cdn.cdnparenting.com/articles/2019/05/29113429/45573697-H-1024x700.webp",
    },
    {
      name: "Sport Equipment",
      image:
        "https://img.joomcdn.net/d9c5beabd2c969f18e19b6fcb8a822e6646d2a34_1024_1024.jpeg",
    },
    {
      name: "Electronics",
      image:
        "https://images.philips.com/is/image/philipsconsumer/a70f06a58bf84e78ab08ac55002f5c83",
    },
    {
      name: "Maternity Clothes",
      image:
        "https://bucket.insyze.com/wp-content/2022/07/d88d9e59-the-best-maternity-dresses-for-plus-size-featured-image-mummyandwe.jpg",
    },
    {
      name: "Party",
      image: "https://m.media-amazon.com/images/I/615Bnr4xpxL._AC_SY355_.jpg",
    },
    {
      name: "Books And Education",
      image:
        "https://images.squarespace-cdn.com/content/v1/591a23a25016e1fdd9e011c8/6668b16e-d502-42fc-b57b-5f7b43ac2d29/mallerykelloggphoto_WeeTalkers102021-5900.jpg",
    },
    {
      name: "Furniture And Decoration",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ikea-baby-nursery-furniture-1555498843.jpg?crop=0.630xw:1.00xh;0.186xw,0&resize=640:*",
    },
  ];

  const option = categories.map((item, index) => {
    return (
      <div key={index} className="home_categoriesOptin">
        <figure>
          <img src={item.image} alt={`${item.name} section`} />
        </figure>
        <div className="home_categoriesName">
          <p>{item.name}</p>
        </div>
      </div>
    );
  });

  return <section className="home_secondSection">{option}</section>;
};

export default S2_Home;
