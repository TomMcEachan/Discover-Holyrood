import axiosInstance from "../utils/Axios";
import { IArticle } from "../data/Datatypes";

export const fetchAllArticles = async (client: any) => {
  let articles: IArticle[] = [];
  await axiosInstance
    .get("/articles?populate=deep")
    .then(async (res) => {
      console.log("Fetching articles...");
      const responseData = await res.data;
      articles = await responseData.data;
      return articles;
    })
    .catch((err) => {
      console.log(err);
    });

  return articles;
};
