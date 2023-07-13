import { fetchAllArticles } from "../fetching/FetchArticles";
import { IArticle, ICategory, ITag } from "../data/Datatypes";

export const addAll = async (client: any) => {
  try {
    console.log("Adding content to all index...");
    // Add articles to 'All' index
    const articles = await fetchAllArticles(client);

    // Map Data
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
        tags: articleTags,
        image: article.attributes.image.data.attributes.formats.medium.url,
        link: article.attributes.link,
      };
    });

    console.log("Adding articles to 'All' index...");
    await client.index("all").addDocuments(searchArticles);
  } catch (err) {
    console.log(err);
  }
};
