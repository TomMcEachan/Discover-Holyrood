"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addArticles = void 0;
const FetchArticles_1 = require("../fetching/FetchArticles");
const MapArticles_1 = require("../mapping/MapArticles");
const addArticles = async (client, indexName, dataTypeName) => {
    try {
        console.log(`Adding ${dataTypeName} to ${indexName} index...`);
        //Fetch all articles from CMS
        const articles = await (0, FetchArticles_1.fetchAllArticles)(client);
        // Map articles to search index format
        const searchArticles = await (0, MapArticles_1.mapArticles)(articles);
        // Add articles to search index
        await client.index(`${indexName}`).addDocuments(searchArticles);
        console.log(`${dataTypeName} added to ${indexName} index!`);
    }
    catch (err) {
        console.log(err);
    }
};
exports.addArticles = addArticles;
