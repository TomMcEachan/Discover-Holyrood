import { fetchAllARScenes } from "../fetching/FetchAr";
import { IARScene } from "../data/Datatypes";
import { mapARScenes } from "../mapping/MapScene";

export const addARScenes = async (
  client: any,
  indexName: string,
  dataTypeName: string
) => {
  try {
    console.log(`Adding ${dataTypeName} to ${indexName} index...`);
    //Fetch all articles from CMS
    const scenes = await fetchAllARScenes(client);

    // Map articles to search index format
    const searchARScenes: IARScene[] = await mapARScenes(scenes);

    // Add articles to search index
    await client.index(`${indexName}`).addDocuments(searchARScenes);
    console.log(`${dataTypeName} added to ${indexName} index!`);
  } catch (err) {
    console.log(err);
  }
};
