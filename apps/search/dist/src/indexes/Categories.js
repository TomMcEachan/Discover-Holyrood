"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCategories = void 0;
const FetchCategories_1 = require("../fetching/FetchCategories");
const addCategories = async (client, indexName, dataTypeName) => {
    try {
        console.log(`Adding ${dataTypeName} to ${indexName} index...`);
        //Fetch all categories from CMS
        const categories = await (0, FetchCategories_1.fetchAllCategories)(client);
        // Map categories to search index format
        console.log(`Mapping ${indexName} data to search index format...`);
        const searchCategories = await categories.map((category) => {
            return {
                id: category.id,
                name: category.attributes.name,
                description: category.attributes.description,
            };
        });
        // Add categories to search index
        await client.index(`${indexName}`).addDocuments(searchCategories);
        console.log(`${dataTypeName} added to ${indexName} index!`);
    }
    catch (err) {
        console.log(err);
    }
};
exports.addCategories = addCategories;
