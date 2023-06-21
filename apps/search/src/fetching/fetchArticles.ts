import axiosInstance from "../utils/axios";
import { IArticle } from "../data/datatypes";

export const fetchAllArticles = async (client: any) => {
  let articles: IArticle[] = [];
  await axiosInstance
    .get("/articles?populate=deep")
    .then(async (res) => {
      console.log("Deleting previous records...");
      await client.index("articles").deleteAllDocuments();
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
