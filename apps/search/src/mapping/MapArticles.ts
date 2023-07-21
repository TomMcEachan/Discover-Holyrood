import { IArticle, ICategory, ITag } from "../data/Datatypes";

export const mapArticles = async (articles: any) => {
  const searchArticles: IArticle[] = await articles.map((article: any) => {
    // Map categories
    const articleCategories: ICategory[] =
      article.attributes.categories.data.map((category: any) => {
        return category.attributes.name;
      });

    // Map tags
    const articleTags: ITag[] = article.attributes.tags.data.map((tag: any) => {
      return tag.attributes.name;
    });

    return {
      id: article.attributes.uuid,
      title: article.attributes.title,
      content: article.attributes.content,
      categories: articleCategories,
      content_type: article.attributes.content_type,
      link: article.attributes.link,
      tags: articleTags,
      image: article.attributes.image.data.attributes.formats.medium.url,
      uniqueIdentifier: article.attributes.uuid,
    };
  });
  return searchArticles;
};
