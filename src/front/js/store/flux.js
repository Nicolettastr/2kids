const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      windowsWidth: window.innerWidth,
      activeColor: "pink",
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
