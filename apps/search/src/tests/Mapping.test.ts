// Import the function to be tested
import { mapArticles } from "../mapping/MapArticles";
import { mapARScenes } from "../mapping/MapScene";

describe("mapArticles", () => {
  it("should map articles to search index format", async () => {
    const mockArticles = [
      {
        attributes: {
          uuid: "12345",
          title: "Article 1",
          content: "Content for Article 1",
          content_type: "News",
          link: "https://example.com/article1",
          image: {
            data: {
              attributes: {
                formats: {
                  medium: {
                    url: "https://example.com/article1_image_medium.jpg",
                  },
                },
              },
            },
          },
          categories: {
            data: [
              {
                attributes: {
                  name: "Category 1",
                },
              },
              {
                attributes: {
                  name: "Category 2",
                },
              },
            ],
          },
          tags: {
            data: [
              {
                attributes: {
                  name: "Tag 1",
                },
              },
              {
                attributes: {
                  name: "Tag 2",
                },
              },
            ],
          },
        },
      },
      // Add more mock articles here if needed
    ];

    // Call the function under test
    const searchArticles = await mapArticles(mockArticles);

    // Assert the result
    expect(searchArticles).toEqual([
      {
        id: "12345",
        title: "Article 1",
        content: "Content for Article 1",
        categories: ["Category 1", "Category 2"],
        content_type: "News",
        link: "https://example.com/article1",
        tags: ["Tag 1", "Tag 2"],
        image: "https://example.com/article1_image_medium.jpg",
        uniqueIdentifier: "12345",
      },
      // Add expected output for more mock articles here if needed
    ]);
  });
});

//Test AR Scene Mapping
describe("mapARScenes", () => {
  it("should map AR scenes to search index format", async () => {
    const mockScenes = [
      {
        attributes: {
          uuid: "scene-1",
          title: "AR Scene 1",
          content_type: "AR Content",
          LinkToARScene: "https://example.com/ar-scene1",
          instructions: "Instructions for AR Scene 1",
          appLink: "https://example.com/ar-scene1",
          image: {
            data: {
              attributes: {
                formats: {
                  medium: {
                    url: "https://example.com/ar-scene1_image_medium.jpg",
                  },
                },
              },
            },
          },
          categories: {
            data: [
              {
                attributes: {
                  name: "Category 1",
                },
              },
              {
                attributes: {
                  name: "Category 2",
                },
              },
            ],
          },
          tags: {
            data: [
              {
                attributes: {
                  name: "Tag 1",
                },
              },
              {
                attributes: {
                  name: "Tag 2",
                },
              },
            ],
          },
        },
      },
      // Add more mock scenes here if needed
    ];

    // Call the function under test
    const searchARScenes = await mapARScenes(mockScenes);

    // Assert the result
    expect(searchARScenes).toEqual([
      {
        id: "scene-1",
        title: "AR Scene 1",
        content_type: "AR Content",
        appLink: "https://example.com/ar-scene1",
        sceneLink: "https://example.com/ar-scene1",
        instructions: "Instructions for AR Scene 1",
        categories: ["Category 1", "Category 2"],
        tags: ["Tag 1", "Tag 2"],
        image: "https://example.com/ar-scene1_image_medium.jpg",
      },
      // Add expected output for more mock scenes here if needed
    ]);
  });
});
