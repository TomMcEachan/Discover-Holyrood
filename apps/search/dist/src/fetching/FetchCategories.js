"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllCategories = void 0;
const axios_1 = __importDefault(require("../utils/axios"));
const fetchAllCategories = async (client) => {
    let categories = [];
    await axios_1.default
        .get("/categories?populate=deep")
        .then(async (res) => {
        console.log("Deleting previous records...");
        client.index("categories").deleteAllDocuments();
        console.log("Fetching articles...");
        const responseData = await res.data;
        categories = await responseData.data;
        return categories;
    })
        .catch((err) => {
        console.log(err);
    });
    return categories;
};
exports.fetchAllCategories = fetchAllCategories;
