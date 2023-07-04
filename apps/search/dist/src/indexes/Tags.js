"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTags = void 0;
const FetchTags_1 = require("../fetching/FetchTags");
const addTags = async (client, indexName, dataTypeName) => {
    try {
        console.log(`Adding ${dataTypeName} to ${indexName} index...`);
        //Fetch all tags from CMS
        const tags = await (0, FetchTags_1.fetchAllTags)(client);
        // Map tags to search index format
        console.log(`Mapping ${indexName} data to search index format...`);
        const searchTags = await tags.map((tag) => {
            return {
                id: tag.id,
                name: tag.attributes.name,
                description: tag.attributes.description,
            };
        });
        // Add tags to search index
        await client.index(`${indexName}`).addDocuments(searchTags);
        console.log(`${dataTypeName} added to ${indexName} index!`);
    }
    catch (err) {
        console.log(err);
    }
};
exports.addTags = addTags;
