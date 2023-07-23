import { IARScene, ICategory, ITag } from "../data/Datatypes";

export const mapARScenes = async (scenes: any) => {
  const searchARScenes: IARScene[] = await scenes.map((scene: any) => {
    // Map categories
    const sceneCategories: ICategory[] = scene.attributes.categories.data.map(
      (category: any) => {
        return category.attributes.name;
      }
    );

    // Map tags
    const sceneTags: ITag[] = scene.attributes.tags.data.map((tag: any) => {
      return tag.attributes.name;
    });

    return {
      id: scene.attributes.uuid,
      title: scene.attributes.title,
      categories: sceneCategories,
      sceneLink: scene.attributes.LinkToARScene,
      tags: sceneTags,
      image: scene.attributes.image.data.attributes.formats.medium.url,
      content_type: scene.attributes.content_type,
      instructions: scene.attributes.instructions,
      link: scene.attributes.appLink,
    };
  });
  return searchARScenes;
};
