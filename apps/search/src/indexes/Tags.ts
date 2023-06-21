import { fetchAllTags } from "../fetching/FetchTags";
import { ITag } from "../data/datatypes";

export const addTags = async (
  client: any,
  indexName: string,
  dataTypeName: string
) => {
  try {
    console.log(`Adding ${dataTypeName} to ${indexName} index...`);
    //Fetch all tags from CMS
    const tags = await fetchAllTags(client);

    // Map tags to search index format
    console.log(`Mapping ${indexName} data to search index format...`);
    const searchTags: ITag[] = await tags.map((tag: any) => {
      return {
        id: tag.id,
        name: tag.attributes.name,
        description: tag.attributes.description,
      };
    });

    // Add tags to search index
    await client.index(`${indexName}`).addDocuments(searchTags);
    console.log(`${dataTypeName} added to ${indexName} index!`);
  } catch (err) {
    console.log(err);
  }
};
