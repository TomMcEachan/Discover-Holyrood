"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const meilisearch_1 = require("meilisearch");
const dotenv_1 = __importDefault(require("dotenv"));
const Article_1 = require("./src/indexes/Article");
const All_1 = require("./src/indexes/All");
const Categories_1 = require("./src/indexes/Categories");
const Tags_1 = require("./src/indexes/Tags");
// Load environment variables from .env file
dotenv_1.default.config();
// Environment variables
const HOST = process.env.SEARCH_HOST;
const KEY = process.env.SEARCH_KEY;
// Main function
const main = async () => {
    const client = new meilisearch_1.MeiliSearch({
        host: HOST || "",
        apiKey: KEY,
    });
    // Create indexes
    await client.createIndex("all", { primaryKey: "id" });
    await client.createIndex("articles", { primaryKey: "id" });
    await client.createIndex("arscenes", { primaryKey: "id" });
    await client.createIndex("categories", { primaryKey: "id" });
    await client.createIndex("tags", { primaryKey: "id" });
    // Add Filters to Indexes
    await client
        .index("all")
        .updateFilterableAttributes(["categories", "tags", "content-type"]);
    await client
        .index("articles")
        .updateFilterableAttributes(["categories", "tags", "content-type"]);
    await client
        .index("arscenes")
        .updateFilterableAttributes(["categories", "tags", "content-type"]);
    // Add documents to indexes
    await addDocuments(client);
};
const addDocuments = async (client) => {
    await (0, Article_1.addArticles)(client, "articles", "Articles");
    console.log("--------------------");
    await (0, Categories_1.addCategories)(client, "categories", "Categories");
    console.log("--------------------");
    await (0, Tags_1.addTags)(client, "tags", "Tags");
    console.log("--------------------");
    await (0, All_1.addAll)(client);
};
// Run main function
main();