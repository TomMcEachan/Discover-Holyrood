import { fetchAllArticles } from "../fetching/FetchArticles";
import { IArticle, ICategory, ITag } from "../data/Datatypes";

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
    console.log(`Mapping ${indexName} data to search index format...`);
    const searchArticles: IArticle[] = await articles.map((article: any) => {
      // Map categories
      const articleCategories: ICategory[] =
        article.attributes.categories.data.map((category: any) => {
          return category.attributes.name;
        });

      // Map tags
      const articleTags: ITag[] = article.attributes.tags.data.map(
        (tag: any) => {
          return tag.attributes.name;
        }
      );

      return {
        id: article.id,
        title: article.attributes.title,
        content: article.attributes.content,
        categories: articleCategories,
        content_type: article.attributes.content_type,
        link: article.attributes.link,
        tags: articleTags,
        image: article.attributes.image.data.attributes.formats.large.url,
      };
    });

    // Add articles to search index
    await client.index(`${indexName}`).addDocuments(searchArticles);
    console.log(`${dataTypeName} added to ${indexName} index!`);
  } catch (err) {
    console.log(err);
  }
};
