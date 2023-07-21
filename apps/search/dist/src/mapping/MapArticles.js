"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapArticles = void 0;
const mapArticles = async (articles) => {
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
exports.mapArticles = mapArticles;
