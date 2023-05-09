import React from "react";
import "../../styles/s2_home.css";

const S2_Home = () => {
  const categories = [
    {
      name: "Furniture",
      image:
        "https://img.freepik.com/foto-gratis/cama-infantil-cuna-infantil-terciopelo-habitacion-infantil_181624-29817.jpg?w=740&t=st=1683655576~exp=1683656176~hmac=bb063b1813ef7782e42aff09b2e416b24463b80759c5043e08c42ae8491e07e8",
    },
    {
      name: "Girl",
      image:
        "https://img.freepik.com/foto-gratis/lindo-bebe_624325-1656.jpg?size=626&ext=jpg&ga=GA1.1.1832098813.1668892518&semt=ais",
    },
    {
      name: "Boy",
      image:
        "https://img.freepik.com/foto-gratis/bebe-yace-cama_8353-5675.jpg?size=626&ext=jpg&ga=GA1.1.1832098813.1668892518&semt=ais",
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
      name: "More",
      image:
        "https://img.freepik.com/foto-gratis/periodo-posnatal-madre-e-hijo_23-2149125032.jpg?size=626&ext=jpg&ga=GA1.1.1832098813.1668892518&semt=ais",
    },
  ];

  const option = categories.map((item) => {
    return (
      <div className="home_categoriesOptin">
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
