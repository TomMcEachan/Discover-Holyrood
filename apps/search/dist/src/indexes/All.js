"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAll = void 0;
const FetchArticles_1 = require("../fetching/FetchArticles");
const FetchAr_1 = require("../fetching/FetchAr");
const MapArticles_1 = require("../mapping/MapArticles");
const MapScene_1 = require("../mapping/MapScene");
const addAll = async (client) => {
    try {
        console.log("Adding content to all index...");
        const articles = await (0, FetchArticles_1.fetchAllArticles)(client);
        const scenes = await (0, FetchAr_1.fetchAllARScenes)(client);
        // Map articles to search index format
        const searchArticles = await (0, MapArticles_1.mapArticles)(articles);
        // Map scenes to search index format
        const searchARScenes = await (0, MapScene_1.mapARScenes)(scenes);
        // Combine articles and sceenes into one array
        const combinedArray = [...searchArticles, ...searchARScenes];
        // Add combined array to search index
        await client.index("all").addDocuments(combinedArray);
    }
    catch (err) {
        console.log(err);
    }
};
exports.addAll = addAll;
