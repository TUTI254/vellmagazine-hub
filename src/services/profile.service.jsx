import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "https://vellmagazine.herokuapp.com/";

const getProfile = async (id) => {
  return await axios
    .get(API_URL + `profiles/${id}/`, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

const ProfileService = {
  getProfile,
};

export default ProfileService;
