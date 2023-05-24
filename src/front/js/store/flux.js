import {
  faCircleUser,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: null,
      windowsWidth: window.innerWidth,
      activeColor: "pink",
      token: null,
      edit: true,
      icons: [{ icon: faCircleUser }, { icon: faHeart }, { icon: faEnvelope }],
      opt: [
        { opt: "Contact Us", link: "contact" },
        { opt: "Menu" },
        { opt: "Blog", link: "blog" },
      ],
      categories: [
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
          image:
            "https://m.media-amazon.com/images/I/615Bnr4xpxL._AC_SY355_.jpg",
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
      ],
      registerAndLoginOpt: [
        { opt: "Sign Up", link: "signup" },
        { opt: "Log In", link: "login" },
      ],
      regexs: {
        passwordRegex:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,32})/,
        emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        zipCodeRegex: /^\d{3,10}$/,
        phoneNumberRegex: /^\d{8,14}$/,
      },
      showPassword: false,
      signupSuccessful: false,
      show: false,
      showModalSignup: false,
      logoutSuccessful: false,
      loginSuccessful: false,
      invalid: false,
    },
    actions: {
      handleResize: () => {
        setStore({ windowsWidth: window.innerWidth });
      },

      handleColor: (color) => {
        setStore({
          activeColor: color,
        });
        localStorage.setItem("activeColor", color);
      },

      removeUnderscores: (word) => {
        return word.replaceAll("_", " ");
      },

      capitalize: (word) => {
        const wordArr = word.split("");
        return wordArr[0].toUpperCase() + wordArr.slice(1).join("");
      },

      Camel: (word) => {
        return word.replace(/[-_]([a-z])/g, (match) => match[1].toUpperCase());
      },

      handleShowPassword: () => {
        const store = getStore();
        setStore({ showPassword: !store.showPassword });
      },

      handleShow: () => {
        setStore({ show: true });
      },

      handleClose: () => {
        setStore({ show: false, showModalSignup: false });
      },

      handleMenu: () => {
        console.log("menu");
      },

      handleValidateForm: (ev, userData) => {
        console.log("handle", userData);
        const actions = getActions();
        const regexs = getStore().regexs;
        ev.preventDefault();
        let newErrors = {};
        for (let field in userData) {
          const camelField = actions.Camel(field);
          if (userData[field] === "") {
            newErrors[field] = `${field} is required`;
          } else if (
            ["email", "password", "zip_code", "phone_number"].includes(field)
          ) {
            if (!regexs[`${camelField}Regex`].test(userData[field])) {
              newErrors[field] = `Invalid ${actions.removeUnderscores(field)}!`;
            }
          }
          if (userData.password !== userData.confirm_password) {
            newErrors.confirm_password = "Passwords do not match";
          }
        }
        if (Object.keys(newErrors).length === 0) {
          actions.handleNewUser(userData);
        } else {
          setStore({ errors: newErrors });
          console.log("errors", newErrors);
        }

        return Object.keys(newErrors).length === 0;
      },

      handleNewUser: async (userForm) => {
        console.log("user Info", userForm);
        const store = getStore();
        store.signupSuccessful = false;
        try {
          const response = await fetch(`http://localhost:3001/api/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userForm),
          });
          console.log(response);
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setStore({ signupSuccessful: true, showModalSignup: true });
            setTimeout(() => setStore({ signupSuccessful: false }), 4000);
            return true;
          }
          throw Error(response.statusText);
        } catch (e) {
          console.log("error:", e);
        }
      },

      login: async (e, email, password) => {
        const store = getStore();
        e.preventDefault();
        const opt = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const response = await fetch(`http://localhost:3001/api/login`, opt);

          const data = await response.json();

          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", JSON.stringify(data.access_token));
          const storedUser = JSON.parse(localStorage.getItem("user"));
          const storedToken = JSON.parse(localStorage.getItem("token"));
          setStore({
            token: storedToken,
            user: storedUser,
          });

          setStore({ loginSuccessful: true });
          setTimeout(() => {
            setStore({ loginSuccessful: false });
          }, 3000);
        } catch (error) {
          setStore({ invalid: true });
          setTimeout(() => {
            setStore({ invalid: false });
          }, 3000);
          setStore({ errors: error.errors });
          console.error(error, store.errors);
        }
      },

      handleLogOut: () => {
        setStore({ user: null, token: null, logoutSuccessful: true });
        setTimeout(() => {
          setStore({ logoutSuccessful: false });
        }, 3000);
        localStorage.clear();
      },

      handleEditUser: () => {
        const store = getStore();
        setStore({ edit: false });
        console.log(store.edit);
      },
    },
  };
};

export default getState;
