"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addARScenes = void 0;
const FetchAr_1 = require("../fetching/FetchAr");
const MapScene_1 = require("../mapping/MapScene");
const addARScenes = async (client, indexName, dataTypeName) => {
    try {
        console.log(`Adding ${dataTypeName} to ${indexName} index...`);
        //Fetch all articles from CMS
        const scenes = await (0, FetchAr_1.fetchAllARScenes)(client);
        // Map articles to search index format
        const searchARScenes = await (0, MapScene_1.mapARScenes)(scenes);
        // Add articles to search index
        await client.index(`${indexName}`).addDocuments(searchARScenes);
        console.log(`${dataTypeName} added to ${indexName} index!`);
    }
    catch (err) {
        console.log(err);
    }
};
exports.addARScenes = addARScenes;
