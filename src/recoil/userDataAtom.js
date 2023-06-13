import { atom } from "recoil";

const userDataFromLocalStorage = JSON.parse(
  localStorage.getItem("userData"),
) || {
  key: "userDataAtom",
  default: {
    username: "",
    accountname: "",
    email: "",
    image: "",
    intro: "",
    token: "",
    _id: "",
  },
};

const loginState = atom({
  key: "loginState",
  default: userDataFromLocalStorage,
});

export default loginState;
