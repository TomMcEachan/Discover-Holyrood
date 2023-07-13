import { fetchAllArticles } from "../fetching/FetchArticles";
import { mapArticles } from "../mapping/MapArticles";

export const addArticles = async (
  client: any,
  indexName: string,
  dataTypeName: string
) => {
  try {
    console.log(`Adding ${dataTypeName} to ${indexName} index...`);
    //Fetch all articles from CMS
    const articles = await fetchAllArticles(client);

    // Map articles to search index format
    const searchArticles = await mapArticles(articles);

    // Add articles to search index
    await client.index(`${indexName}`).addDocuments(searchArticles);
    console.log(`${dataTypeName} added to ${indexName} index!`);
  } catch (err) {
    console.log(err);
  }
};
