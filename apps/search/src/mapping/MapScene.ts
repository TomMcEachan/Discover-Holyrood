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
      id: scene.id,
      title: scene.attributes.title,
      categories: sceneCategories,
      link: scene.attributes.link,
      tags: sceneTags,
      image: scene.attributes.image.data.attributes.formats.medium.url,
      uuid: scene.attributes.uuid,
    };
  });
  return searchARScenes;
};
