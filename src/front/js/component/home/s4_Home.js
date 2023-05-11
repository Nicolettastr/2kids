import React from "react";
import "../../../styles/s4_home.css";

const S4_Home = () => {
  const mothers = [
    {
      img: "https://www.sciencenews.org/wp-content/uploads/2015/05/ls_mothersday_free.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiAKCiX_zQ4EqcSOvAdRKOnpDwOo-LVM8odA&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQvFBEFBPvu6kNGH4qQ6lq816rp5op06XaCw&usqp=CAU",
    },
    {
      img: "https://www.parenthub.com.au/wp-content/uploads/2016/02/mothers_babies_group.jpg",
    },
  ];

  const mothersImg = mothers.map((item, index) => {
    return (
      <figure key={index}>
        <img src={item.img} alt="mothers pictures with their babies" />
      </figure>
    );
  });

  return (
    <section className="home_mothersSection">
      <div className="home_mothersImages">{mothersImg}</div>
      <div className="home_mothersTitle">
        <h2 className="title">Reach a community of mothers.</h2>
        <p>
          Connect with other moms and families in the marketplace. Find new
          friends and learn more about motherhood through shared experiences.
        </p>
      </div>
    </section>
  );
};

export default S4_Home;
