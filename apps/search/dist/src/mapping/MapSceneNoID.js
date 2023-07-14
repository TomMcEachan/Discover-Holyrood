"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapARScenesAll = void 0;
const mapARScenesAll = async (scenes) => {
    const searchARScenes = await scenes.map((scene) => {
        // Map categories
        const sceneCategories = scene.attributes.categories.data.map((category) => {
            return category.attributes.name;
        });
        // Map tags
        const sceneTags = scene.attributes.tags.data.map((tag) => {
            return tag.attributes.name;
        });
        return {
            uniqueIdentifier: scene.attributes.uuid,
            title: scene.attributes.title,
            categories: sceneCategories,
            link: scene.attributes.link,
            tags: sceneTags,
            image: scene.attributes.image.data.attributes.formats.medium.url,
        };
    });
    return searchARScenes;
};
exports.mapARScenesAll = mapARScenesAll;
