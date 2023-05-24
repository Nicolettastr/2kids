import React, { useState } from "react";
import "../../styles/shopping.css";
import logo from "../../img/2kids.png";
import Button from "../component/tags/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

const Shopping = () => {
  const [active, setActive] = useState(true);
  const [activeC, setActiveC] = useState(false);
  const [activeCa, setActiveCa] = useState(false);

  const trash = <FontAwesomeIcon icon={faTrash} />;
  const check = <FontAwesomeIcon icon={faCheck} />;

  const handleLink = (id) => {
    if (id === "course") {
      const course = document.querySelector("#course");
      course.classList.add("show");
      end.classList.remove("show");
      setActiveC(true);
      setActiveCa(false);
      setActive(false);
    } else if (id === "end") {
      const end = document.querySelector("#end");
      end.classList.add("show");
      course.classList.remove("show");
      setActiveCa(true);
      setActiveC(false);
      setActive(false);
    }
  };

  console.log(activeC);
  console.log(activeCa);

  return (
    <section className="shopping_section">
      <div className="shopping_infoContainer">
        <div className="shopping_container">
          <h4>Compras</h4>
        </div>
        <div className="shopping_cardContainer">
          <ul className="shopping_listContainer">
            <li
              id="course"
              onClick={(e) => handleLink("course")}
              className={`shopping_li`}
            >
              En curso
            </li>
            <li
              id="end"
              onClick={(e) => handleLink("end")}
              className={`shopping_li`}
            >
              Terminado
            </li>
          </ul>
          {active ? (
            <h4 className="shopping_hitoryTitle">Shopping History</h4>
          ) : (
            <div className="shopping_articleSection">
              <div className="shopping_logoContainer">
                <figure className="shopping_logo">
                  <img src={logo} alt="logo de empresa" />
                </figure>
              </div>
              <div className="shopping_articleShopInfo">
                <div>
                  <figure className="article_img">
                    <img src="https://image.yfswebstatic.com/fit-in/950x950/origin/product/009798000904/60f7dd17236a7.jpg" />
                  </figure>
                </div>
                <div className="shopping_articleData">
                  <p>Date: 16/03/2023</p>
                  <p>Unit: 1</p>
                  {activeC ? (
                    <>
                      <Button
                        classname="shopping_articleBtnCancel"
                        name={trash}
                      ></Button>
                      <Button
                        classname="shopping_articleBtnCheck"
                        name={check}
                      ></Button>
                    </>
                  ) : activeCa ? (
                    <p className="shopping_completed">Completed</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shopping;
