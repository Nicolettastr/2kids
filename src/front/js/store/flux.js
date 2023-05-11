const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      windowsWidth: window.innerWidth,
      activeColor: "pink",
    },
    actions: {
      handleResize: () => {
        const store = getStore();
        setStore({ windowsWidth: window.innerWidth });
      },

      handleColor: (color) => {
        const store = getStore();
        setStore({ activeColor: color });
      },
    },
  };
};

export default getState;
