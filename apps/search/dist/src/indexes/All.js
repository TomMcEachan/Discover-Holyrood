"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAll = void 0;
const Article_1 = require("./Article");
const addAll = async (client) => {
    try {
        // Add articles to 'All' index
        (0, Article_1.addArticles)(client, "all", "Articles");
    }
    catch (err) {
        console.log(err);
    }
};
exports.addAll = addAll;
