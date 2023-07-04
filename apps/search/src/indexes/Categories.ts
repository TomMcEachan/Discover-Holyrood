import { fetchAllCategories } from "../fetching/FetchCategories";
import { ICategory } from "../data/datatypes";

export const addCategories = async (
  client: any,
  indexName: string,
  dataTypeName: string
) => {
  try {
    console.log(`Adding ${dataTypeName} to ${indexName} index...`);
    //Fetch all categories from CMS
    const categories = await fetchAllCategories(client);

    // Map categories to search index format
    console.log(`Mapping ${indexName} data to search index format...`);
    const searchCategories: ICategory[] = await categories.map(
      (category: any) => {
        return {
          id: category.id,
          name: category.attributes.name,
          description: category.attributes.description,
        };
      }
    );

    // Add categories to search index
    await client.index(`${indexName}`).addDocuments(searchCategories);
    console.log(`${dataTypeName} added to ${indexName} index!`);
  } catch (err) {
    console.log(err);
  }
};
