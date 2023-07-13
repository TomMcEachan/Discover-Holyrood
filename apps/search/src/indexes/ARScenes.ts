import { fetchAllARScenes } from "../fetching/FetchAr";
import { IARScene, ICategory, ITag } from "../data/Datatypes";

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
    console.log(`Mapping ${indexName} data to search index format...`);
    const searchARScenes: IARScene[] = await scenes.map((scene: any) => {
      // Map categories
      const sceneCategories: ICategory[] = scene.attributes.categories.data.map(
        (category: any) => {
          return category.attributes.name;
        }
      );

      // Map tags
      const sceneTags: ITag[] = scene.attributes.tags.data.map((tag: any) => {
        return tag.attributes.name;
      });

      return {
        id: scene.id,
        title: scene.attributes.title,
        categories: sceneCategories,
        link: scene.attributes.link,
        tags: sceneTags,
        image: scene.attributes.image.data.attributes.formats.medium.url,
      };
    });

    // Add articles to search index
    await client.index(`${indexName}`).addDocuments(searchARScenes);
    console.log(`${dataTypeName} added to ${indexName} index!`);
  } catch (err) {
    console.log(err);
  }
};
