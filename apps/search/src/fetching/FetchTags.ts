import axiosInstance from "../utils/axios";
import { ITag } from "../data/datatypes";

export const fetchAllTags = async (client: any) => {
  let tags: ITag[] = [];
  await axiosInstance
    .get("/tags?populate=deep")
    .then(async (res) => {
      console.log("Deleting previous records...");
      client.index("tags").deleteAllDocuments();

      console.log("Fetching tags...");
      const responseData = await res.data;
      tags = await responseData.data;
      return tags;
    })
    .catch((err) => {
      console.log(err);
    });

  return tags;
};