"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllArticles = void 0;
const axios_1 = __importDefault(require("../utils/axios"));
const fetchAllArticles = async (client) => {
    let articles = [];
    await axios_1.default
        .get("/articles?populate=deep")
        .then(async (res) => {
        console.log("Deleting previous records...");
        await client.index("articles").deleteAllDocuments();
        console.log("Fetching articles...");
        const responseData = await res.data;
        articles = await responseData.data;
        return articles;
    })
        .catch((err) => {
        console.log(err);
    });
    return articles;
};
exports.fetchAllArticles = fetchAllArticles;
