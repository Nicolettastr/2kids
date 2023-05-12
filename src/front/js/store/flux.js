import {
  faCircleUser,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      windowsWidth: window.innerWidth,
      activeColor: "pink",
      token: null,
      icons: [{ icon: faCircleUser }, { icon: faHeart }, { icon: faEnvelope }],
      opt: [
        { opt: "Contact Us", link: "contact" },
        { opt: "About Us", link: "aboutUs" },
      ],
    },
    actions: {
      handleResize: () => {
        setStore({ windowsWidth: window.innerWidth });
      },

      handleColor: (color) => {
        setStore({ activeColor: color });
      },
    },
  };
};

export default getState;
