"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTags = void 0;
const FetchCategories_1 = require("../fetching/FetchCategories");
const addTags = async (client, indexName, dataTypeName) => {
    try {
        console.log(`Adding ${dataTypeName} to ${indexName} index...`);
        //Fetch all tags from CMS
        const tags = await (0, FetchCategories_1.fetchAllCategories)(client);
        // Map tags to search index format
        console.log(`Mapping ${indexName} data to search index format...`);
        const searchTag = await tags.map((tag) => {
            return {
                id: tag.id,
                name: tag.attributes.name,
                description: tag.attributes.description,
            };
        });
        // Add tags to search index
        await client.index(`${indexName}`).addDocuments(searchTag);
        console.log(`${dataTypeName} added to ${indexName} index!`);
    }
    catch (err) {
        console.log(err);
    }
};
exports.addTags = addTags;
