import axiosInstance from "../utils/Axios";
import { ICategory } from "../data/Datatypes";

export const fetchAllCategories = async (client: any) => {
  let categories: ICategory[] = [];
  await axiosInstance
    .get("/categories?populate=deep")
    .then(async (res) => {
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
