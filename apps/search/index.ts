import { MeiliSearch } from "meilisearch";
import dotenv from "dotenv";

import { addAll } from "./src/indexes/All";
import { addCategories } from "./src/indexes/Categories";
import { addTags } from "./src/indexes/Tags";
import { addArticles } from "./src/indexes/Articles";
import { addARScenes } from "./src/indexes/ARScenes";

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

  await addAll(client);
  console.log("--------------------");
  await addArticles(client, "articles", "Articles");
  console.log("--------------------");
  await addARScenes(client, "arscenes", "ARScenes");
  console.log("--------------------");
  await addCategories(client, "categories", "Categories");
  console.log("--------------------");
  await addTags(client, "tags", "Tags");
  console.log("--------------------");
};

// Run main function
main();
