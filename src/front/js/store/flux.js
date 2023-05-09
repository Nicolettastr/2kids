const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      windowsWidth: window.innerWidth,
    },
    actions: {
      handleResize: () => {
        const store = getStore();
        setStore({ windowsWidth: window.innerWidth });
      },
    },
  };
};

export default getState;
