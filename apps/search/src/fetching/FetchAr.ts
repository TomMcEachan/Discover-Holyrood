import axiosInstance from "../utils/Axios";
import { IARScene } from "../data/Datatypes";

export const fetchAllARScenes = async (client: any) => {
  let scenes: IARScene[] = [];
  await axiosInstance
    .get("/ars?populate=deep")
    .then(async (res) => {
      console.log("Fetching AR scenes...");
      const responseData = await res.data;
      scenes = await responseData.data;
      return scenes;
    })
    .catch((err) => {
      console.log(err);
    });
  return scenes;
};
