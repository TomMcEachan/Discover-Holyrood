import { fetchAllArticles } from "../fetching/FetchArticles";
import { fetchAllARScenes } from "../fetching/FetchAr";
import { IArticle, ICategory, ITag, IARScene } from "../data/Datatypes";
import { mapArticles } from "../mapping/MapArticles";
import { mapARScenes } from "../mapping/MapScene";

export const addAll = async (client: any) => {
  try {
    console.log("Adding content to all index...");

    const articles = await fetchAllArticles(client);
    const scenes = await fetchAllARScenes(client);

    // Map articles to search index format
    const searchArticles: IArticle[] = await mapArticles(articles);

    // Map scenes to search index format
    const searchARScenes: IARScene[] = await mapARScenes(scenes);

    console.log("Adding articles to 'All' index...");
    await client.index("all").addDocuments(searchArticles);

    console.log("Adding AR scenes to 'All' index...");
    await client.index("all").addDocuments(searchARScenes);
  } catch (err) {
    console.log(err);
  }
};
