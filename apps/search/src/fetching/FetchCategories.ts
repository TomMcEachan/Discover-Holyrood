import axiosInstance from "../utils/axios";
import { ICategory } from "../data/datatypes";

export const fetchAllCategories = async (client: any) => {
  let categories: ICategory[] = [];
  await axiosInstance
    .get("/categories?populate=deep")
    .then(async (res) => {
      console.log("Deleting previous records...");
      client.index("categories").deleteAllDocuments();

      console.log("Fetching articles...");
      const responseData = await res.data;
      categories = await responseData.data;
      return categories;
    })
    .catch((err) => {
      console.log(err);
    });

  return categories;
};
