import { MeiliSearch } from "meilisearch";
import dotenv from "dotenv";

import { addArticles } from "./src/indexes/Article";
import { addAll } from "./src/indexes/All";
import { addCategories } from "./src/indexes/Categories";
import { addTags } from "./src/indexes/Tags";

// Load environment variables from .env file
dotenv.config();

// Environment variables
const HOST = process.env.SEARCH_HOST;
const KEY = process.env.SEARCH_KEY;

// Main function
const main = async () => {
  const client = new MeiliSearch({
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

const addDocuments = async (client: any) => {
  await addArticles(client, "articles", "Articles");
  console.log("--------------------");
  await addCategories(client, "categories", "Categories");
  console.log("--------------------");
  await addTags(client, "tags", "Tags");
  console.log("--------------------");
  await addAll(client);
};

// Run main function
main();
