"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addArticles = void 0;
const FetchArticles_1 = require("../fetching/FetchArticles");
const addArticles = async (client, indexName, dataTypeName) => {
    try {
        console.log(`Adding ${dataTypeName} to ${indexName} index...`);
        //Fetch all articles from CMS
        const articles = await (0, FetchArticles_1.fetchAllArticles)(client);
        // Map articles to search index format
        console.log(`Mapping ${indexName} data to search index format...`);
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
                tags: articleTags,
                image: article.attributes.image.data.attributes.formats.large.url,
            };
        });
        // Add articles to search index
        await client.index(`${indexName}`).addDocuments(searchArticles);
        console.log(`${dataTypeName} added to ${indexName} index!`);
    }
    catch (err) {
        console.log(err);
    }
};
exports.addArticles = addArticles;
