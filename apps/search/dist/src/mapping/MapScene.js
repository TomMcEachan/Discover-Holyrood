"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapARScenes = void 0;
const mapARScenes = async (scenes) => {
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
            id: scene.attributes.uuid,
            title: scene.attributes.title,
            categories: sceneCategories,
            link: scene.attributes.LinkToARScene,
            tags: sceneTags,
            image: scene.attributes.image.data.attributes.formats.medium.url,
            content_type: scene.attributes.content_type,
            instructions: scene.attributes.instructions,
        };
    });
    return searchARScenes;
};
exports.mapARScenes = mapARScenes;
