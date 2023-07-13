"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addARScenes = void 0;
const FetchAr_1 = require("../fetching/FetchAr");
const addARScenes = async (client, indexName, dataTypeName) => {
    try {
        console.log(`Adding ${dataTypeName} to ${indexName} index...`);
        //Fetch all articles from CMS
        const scenes = await (0, FetchAr_1.fetchAllARScenes)(client);
        // Map articles to search index format
        console.log(`Mapping ${indexName} data to search index format...`);
        const searchARScenes = await scenes.map((scene) => {
            // Map categories
            const sceneCategories = scene.attributes.categories.data.map((category) => {
                return category.attributes.name;
            });
            // Map tags
            const sceneTags = scene.attributes.tags.data.map((tag) => {
                return tag.attributes.name;
            });
            return {
                id: scene.id,
                title: scene.attributes.title,
                categories: sceneCategories,
                link: scene.attributes.link,
                tags: sceneTags,
                image: scene.attributes.image.data.attributes.formats.medium.url,
            };
        });
        // Add articles to search index
        await client.index(`${indexName}`).addDocuments(searchARScenes);
        console.log(`${dataTypeName} added to ${indexName} index!`);
    }
    catch (err) {
        console.log(err);
    }
};
exports.addARScenes = addARScenes;
