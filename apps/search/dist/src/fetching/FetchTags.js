"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllTags = void 0;
const axios_1 = __importDefault(require("../utils/axios"));
const fetchAllTags = async (client) => {
    let tags = [];
    await axios_1.default
        .get("/tags?populate=deep")
        .then(async (res) => {
        console.log("Deleting previous records...");
        client.index("tags").deleteAllDocuments();
        console.log("Fetching tags...");
        const responseData = await res.data;
        tags = await responseData.data;
        return tags;
    })
        .catch((err) => {
        console.log(err);
    });
    return tags;
};
exports.fetchAllTags = fetchAllTags;