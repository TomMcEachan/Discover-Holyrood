"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllARScenes = void 0;
const Axios_1 = __importDefault(require("../utils/Axios"));
const fetchAllARScenes = async (client) => {
    let scenes = [];
    await Axios_1.default
        .get("/ars?populate=deep")
        .then(async (res) => {
        console.log("Fetching AR scenes...");
        const responseData = await res.data;
        scenes = await responseData.data;
        return scenes;
    })
        .catch((err) => {
        console.log(err);
    });
    return scenes;
};
exports.fetchAllARScenes = fetchAllARScenes;
