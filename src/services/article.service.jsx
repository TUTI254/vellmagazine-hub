import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://vellmagazine.herokuapp.com/";

const getAllArticles = async () => {
  return await axios.get(API_URL + "articles/", { headers: authHeader() });
};

const createArticle = async (
  mainHeader,
  subHeader,
  contentHeader,
  content,
  coverimage,
  topics,
  template
) => {
  return await axios.post(
    API_URL + "articlecreate/",
    {
      mainHeader,
      subHeader,
      contentHeader,
      content,
      coverimage,
      topics,
      template,
    },
    { headers: authHeader() }
  );
};

// const getArticle = async (id) => {
//   return await axios.get(API_URL + `article/${id}/`, {
//     headers: authHeader(),
//   });
// };

// const updateArticle = async () => {
//   return await axios.put(
//     API_URL + `article/${id}/`,
//     {  },
//     { headers: authHeader() }
//   );
// };

// const deleteArticle = async (id) => {
//   return await axios.delete(API_URL + `articles/${id}/`, {
//     headers: authHeader(),
//   });
// };

const ArticleService = {
  getAllArticles,
  createArticle,
  //   getArticle,
  //   updateArticle,
  //   deleteArticle,
};

export default ArticleService;
