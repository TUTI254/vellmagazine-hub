import axios from "axios";

const API_URL = "https://vellmagazine.herokuapp.com/";

const register = async (
  full_name,
  email,
  user_type,
  password1,
  password2,
  profile_img
) => {
  return await axios
    .post(
      API_URL + "auth/registration/",
      {
        full_name,
        email,
        user_type,
        password1,
        password2,
        profile_img,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      if (response.status === 201) {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.access)
        );
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      return response.data;
    });
};

const login = async (email, password) => {
  return await axios
    .post(API_URL + "auth/login/", {
      email,
      password,
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.access)
        );
        localStorage.setItem("user", JSON.stringify(response.data.user.pk));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("accessToken");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const isLoggedIn = () => {
  return JSON.parse(localStorage.getItem("accessToken"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  isLoggedIn,
};

export default AuthService;
