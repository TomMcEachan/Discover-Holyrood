"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapArticlesAll = void 0;
const mapArticlesAll = async (articles) => {
    const searchArticles = await articles.map((article) => {
        // Map categories
        const articleCategories = article.attributes.categories.data.map((category) => {
            return category.attributes.name;
        });
        // Map tags
        const articleTags = article.attributes.tags.data.map((tag) => {
            return tag.attributes.name;
        });
        return {
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
exports.mapArticlesAll = mapArticlesAll;
