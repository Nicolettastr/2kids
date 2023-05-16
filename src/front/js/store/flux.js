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
    },
    actions: {
      handleResize: () => {
        setStore({ windowsWidth: window.innerWidth });
      },

      handleColor: (color) => {
        setStore({ activeColor: color });
      },

      removeUnderscores: (word) => {
        return word.replaceAll("_", " ");
      },

      capitalize: (word) => {
        const wordArr = word.split("");
        return wordArr[0].toUpperCase() + wordArr.slice(1).join("");
      },

      kebabToCamel: (word) => {
        return word.replace(/[-_]([a-z])/g, (match) => match[1].toUpperCase());
      },

      handleShowPassword: () => {
        const store = getStore();
        setStore({ showPassword: !store.showPassword });
      },

      handleValidateForm: (ev, userData) => {
        console.log("handle", userData);
        const actions = getActions();
        const regexs = getStore().regexs;
        ev.preventDefault();
        let newErrors = {};
        for (let field in userData) {
          const camelField = actions.kebabToCamel(field);
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
          const response = await fetch(
            `https://3001-nicolettastr-2kids-plbjn8qiwqn.ws-eu97.gitpod.io/api/signup`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userForm),
            }
          );
          console.log(response);
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setStore({ signupSuccessful: true });
            setTimeout(() => setStore({ signupSuccessful: false }), 4000);
            return true;
          }
          throw Error(response.statusText);
        } catch (e) {
          console.log("error:", e);
        }
      },
    },
  };
};

export default getState;
