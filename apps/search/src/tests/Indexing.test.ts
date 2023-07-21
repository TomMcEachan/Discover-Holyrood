// Import the function to be tested and the required dependencies
import { addARScenes } from "../indexes/ARScenes";
import { fetchAllARScenes } from "../fetching/FetchAr";
import { mapARScenes } from "../mapping/MapScene";
import { addCategories } from "../indexes/Categories";
import { fetchAllCategories } from "../fetching/FetchCategories";
import { addTags } from "../indexes/Tags";
import { fetchAllTags } from "../fetching/FetchTags";
import { addArticles } from "../indexes/Articles";
import { fetchAllArticles } from "../fetching/FetchArticles";
import { mapArticles } from "../mapping/MapArticles";
import { addAll } from "../indexes/All";

// Mocks
jest.mock("../fetching/FetchAr");
jest.mock("../mapping/MapScene");
jest.mock("../fetching/FetchCategories");
jest.mock("../fetching/FetchTags");
jest.mock("../fetching/FetchArticles");
jest.mock("../mapping/MapArticles");

// Index AR Scenes Tests
describe("addARScenes", () => {
  it("should add AR scenes to the search index successfully", async () => {
    const mockClient = {
      index: jest.fn().mockReturnThis(),
      addDocuments: jest.fn(),
    };

    const mockScenes = [
      { id: 1, name: "Scene 1" },
      { id: 2, name: "Scene 2" },
    ];

    // Mock fetchAllARScenes to return mockScenes
    (fetchAllARScenes as jest.Mock).mockResolvedValueOnce(mockScenes);

    const mockMappedScenes = [
      { id: 1, title: "Scene 1" },
      { id: 2, title: "Scene 2" },
    ];

    // Mock mapARScenes to return mockMappedScenes
    (mapARScenes as jest.Mock).mockResolvedValueOnce(mockMappedScenes);

    // Call the function under test
    const indexName = "ar_scenes";
    const dataTypeName = "AR Scenes";
    await addARScenes(mockClient, indexName, dataTypeName);

    // Assert that fetchAllARScenes and mapARScenes were called with the client object
    expect(fetchAllARScenes).toHaveBeenCalledWith(mockClient);
    expect(mapARScenes).toHaveBeenCalledWith(mockScenes);

    // Assert that client.index(indexName).addDocuments was called with the mapped scenes
    expect(mockClient.index).toHaveBeenCalledWith(indexName);
    expect(mockClient.addDocuments).toHaveBeenCalledWith(mockMappedScenes);
  });

  it("should handle errors and log them", async () => {
    const mockClient = {
      index: jest.fn().mockReturnThis(),
      addDocuments: jest.fn(),
    };

    // Mock fetchAllARScenes to throw an error
    const error = new Error("Failed to fetch AR scenes");
    (fetchAllARScenes as jest.Mock).mockRejectedValueOnce(error);

    // Call the function under test
    const indexName = "ar_scenes";
    const dataTypeName = "AR Scenes";
    await addARScenes(mockClient, indexName, dataTypeName);

    // Assert that fetchAllARScenes and mapARScenes were not called
    expect(fetchAllARScenes).toHaveBeenCalledWith(mockClient);

    // Assert that client.index(indexName).addDocuments was not called
    expect(mockClient.index).not.toHaveBeenCalled();
    expect(mockClient.addDocuments).not.toHaveBeenCalled();
  });
});

// Fetch Categories Tests
describe("addCategories", () => {
  it("should add categories to the search index successfully", async () => {
    const mockClient = {
      index: jest.fn().mockReturnThis(),
      addDocuments: jest.fn(),
    };

    const mockCategories = [
      {
        id: 1,
        attributes: { name: "Category 1", description: "Description 1" },
      },
      {
        id: 2,
        attributes: { name: "Category 2", description: "Description 2" },
      },
    ];

    // Mock fetchAllCategories to return mockCategories
    (fetchAllCategories as jest.Mock).mockResolvedValueOnce(mockCategories);

    // Call the function under test
    const indexName = "categories";
    const dataTypeName = "Categories";
    await addCategories(mockClient, indexName, dataTypeName);

    // Assert that fetchAllCategories was called with the client object
    expect(fetchAllCategories).toHaveBeenCalledWith(mockClient);

    // Assert that client.index(indexName).addDocuments was called with the correct data
    expect(mockClient.index).toHaveBeenCalledWith(indexName);
    expect(mockClient.addDocuments).toHaveBeenCalledWith([
      { id: 1, name: "Category 1", description: "Description 1" },
      { id: 2, name: "Category 2", description: "Description 2" },
    ]);
  });

  it("should handle errors and log them", async () => {
    const mockClient = {
      index: jest.fn().mockReturnThis(),
      addDocuments: jest.fn(),
    };

    // Mock fetchAllCategories to throw an error
    const error = new Error("Failed to fetch categories");
    (fetchAllCategories as jest.Mock).mockRejectedValueOnce(error);

    // Call the function under test
    const indexName = "categories";
    const dataTypeName = "Categories";
    await addCategories(mockClient, indexName, dataTypeName);

    // Assert that fetchAllCategories was called
    expect(fetchAllCategories).toHaveBeenCalledWith(mockClient);

    // Assert that client.index(indexName).addDocuments was not called
    expect(mockClient.index).not.toHaveBeenCalled();
    expect(mockClient.addDocuments).not.toHaveBeenCalled();
  });
});

// Fetch Tags Tests
describe("addTags", () => {
  it("should add tags to the search index successfully", async () => {
    const mockClient = {
      index: jest.fn().mockReturnThis(),
      addDocuments: jest.fn(),
    };

    const mockTags = [
      { id: 1, attributes: { name: "Tag 1", description: "Description 1" } },
      { id: 2, attributes: { name: "Tag 2", description: "Description 2" } },
    ];

    // Mock fetchAllTags to return mockTags
    (fetchAllTags as jest.Mock).mockResolvedValueOnce(mockTags);

    // Call the function under test
    const indexName = "tags";
    const dataTypeName = "Tags";
    await addTags(mockClient, indexName, dataTypeName);

    // Assert that fetchAllTags was called with the client object
    expect(fetchAllTags).toHaveBeenCalledWith(mockClient);

    // Assert that client.index(indexName).addDocuments was called with the correct data
    expect(mockClient.index).toHaveBeenCalledWith(indexName);
    expect(mockClient.addDocuments).toHaveBeenCalledWith([
      { id: 1, name: "Tag 1", description: "Description 1" },
      { id: 2, name: "Tag 2", description: "Description 2" },
    ]);
  });

  it("should handle errors and log them", async () => {
    const mockClient = {
      index: jest.fn().mockReturnThis(),
      addDocuments: jest.fn(),
    };

    // Mock fetchAllTags to throw an error
    const error = new Error("Failed to fetch tags");
    (fetchAllTags as jest.Mock).mockRejectedValueOnce(error);

    // Call the function under test
    const indexName = "tags";
    const dataTypeName = "Tags";
    await addTags(mockClient, indexName, dataTypeName);

    // Assert that fetchAllTags was called
    expect(fetchAllTags).toHaveBeenCalledWith(mockClient);

    // Assert that client.index(indexName).addDocuments was not called
    expect(mockClient.index).not.toHaveBeenCalled();
    expect(mockClient.addDocuments).not.toHaveBeenCalled();
  });
});

// Fetch Articles Tests
describe("addArticles", () => {
  it("should add articles to the search index successfully", async () => {
    const mockClient = {
      index: jest.fn().mockReturnThis(),
      addDocuments: jest.fn(),
    };

    const mockArticles = [
      { id: 1, title: "Article 1" },
      { id: 2, title: "Article 2" },
    ];

    // Mock fetchAllArticles to return mockArticles
    (fetchAllArticles as jest.Mock).mockResolvedValueOnce(mockArticles);

    const mockMappedArticles = [
      { id: 1, name: "Article 1" },
      { id: 2, name: "Article 2" },
    ];

    // Mock mapArticles to return mockMappedArticles
    (mapArticles as jest.Mock).mockResolvedValueOnce(mockMappedArticles);

    // Call the function under test
    const indexName = "articles";
    const dataTypeName = "Articles";
    await addArticles(mockClient, indexName, dataTypeName);

    // Assert that fetchAllArticles and mapArticles were called with the client object
    expect(fetchAllArticles).toHaveBeenCalledWith(mockClient);
    expect(mapArticles).toHaveBeenCalledWith(mockArticles);

    // Assert that client.index(indexName).addDocuments was called with the mapped articles
    expect(mockClient.index).toHaveBeenCalledWith(indexName);
    expect(mockClient.addDocuments).toHaveBeenCalledWith(mockMappedArticles);
  });

  it("should handle errors and log them", async () => {
    const mockClient = {
      index: jest.fn().mockReturnThis(),
      addDocuments: jest.fn(),
    };

    // Mock fetchAllArticles to throw an error
    const error = new Error("Failed to fetch articles");
    (fetchAllArticles as jest.Mock).mockRejectedValueOnce(error);

    // Call the function under test
    const indexName = "articles";
    const dataTypeName = "Articles";
    await addArticles(mockClient, indexName, dataTypeName);

    // Assert that fetchAllArticles and mapArticles were not called
    expect(fetchAllArticles).toHaveBeenCalledWith(mockClient);

    // Assert that client.index(indexName).addDocuments was not called
    expect(mockClient.index).not.toHaveBeenCalled();
    expect(mockClient.addDocuments).not.toHaveBeenCalled();
  });
});

// Fetch All Tests
describe("addAll", () => {
  it("should add all content to the search index successfully", async () => {
    const mockClient = {
      index: jest.fn().mockReturnThis(),
      addDocuments: jest.fn(),
    };

    const mockArticles = [
      { id: 1, title: "Article 1" },
      { id: 2, title: "Article 2" },
    ];

    const mockScenes = [
      { id: 1, name: "Scene 1" },
      { id: 2, name: "Scene 2" },
    ];

    // Mock fetchAllArticles to return mockArticles
    (fetchAllArticles as jest.Mock).mockResolvedValueOnce(mockArticles);

    // Mock fetchAllARScenes to return mockScenes
    (fetchAllARScenes as jest.Mock).mockResolvedValueOnce(mockScenes);

    const mockMappedArticles = [
      { id: 1, name: "Article 1" },
      { id: 2, name: "Article 2" },
    ];

    const mockMappedScenes = [
      { id: 1, name: "Scene 1" },
      { id: 2, name: "Scene 2" },
    ];

    // Mock mapArticles to return mockMappedArticles
    (mapArticles as jest.Mock).mockResolvedValueOnce(mockMappedArticles);

    // Mock mapARScenes to return mockMappedScenes
    (mapARScenes as jest.Mock).mockResolvedValueOnce(mockMappedScenes);

    // Call the function under test
    await addAll(mockClient);

    // Assert that fetchAllArticles and fetchAllARScenes were called with the client object
    expect(fetchAllArticles).toHaveBeenCalledWith(mockClient);
    expect(fetchAllARScenes).toHaveBeenCalledWith(mockClient);

    // Assert that mapArticles and mapARScenes were called with the respective data
    expect(mapArticles).toHaveBeenCalledWith(mockArticles);
    expect(mapARScenes).toHaveBeenCalledWith(mockScenes);

    // Assert that client.index("all").addDocuments was called with the combined array
    expect(mockClient.index).toHaveBeenCalledWith("all");
    expect(mockClient.addDocuments).toHaveBeenCalledWith([
      ...mockMappedArticles,
      ...mockMappedScenes,
    ]);
  });

  it("should handle errors and log them", async () => {
    const mockClient = {
      index: jest.fn().mockReturnThis(),
      addDocuments: jest.fn(),
    };

    // Mock fetchAllArticles to throw an error
    const error = new Error("Failed to fetch articles");
    (fetchAllArticles as jest.Mock).mockRejectedValueOnce(error);

    // Call the function under test
    await addAll(mockClient);

    // Assert that fetchAllArticles and fetchAllARScenes were called
    expect(fetchAllArticles).toHaveBeenCalledWith(mockClient);

    // Assert that client.index("all").addDocuments was not called
    expect(mockClient.index).not.toHaveBeenCalled();
    expect(mockClient.addDocuments).not.toHaveBeenCalled();
  });
});
