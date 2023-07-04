"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAll = void 0;
const FetchArticles_1 = require("../fetching/FetchArticles");
const addAll = async (client) => {
    try {
        console.log("Adding content to all index...");
        // Add articles to 'All' index
        const articles = await (0, FetchArticles_1.fetchAllArticles)(client);
        // Map Data
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
                id: article.id,
                title: article.attributes.title,
                content: article.attributes.content,
                categories: articleCategories,
                content_type: article.attributes.content_type,
                tags: articleTags,
                image: article.attributes.image.data.attributes.formats.large.url,
                link: article.attributes.link,
            };
        });
        console.log("Adding articles to 'All' index...");
        await client.index("all").addDocuments(searchArticles);
    }
    catch (err) {
        console.log(err);
    }
};
exports.addAll = addAll;
