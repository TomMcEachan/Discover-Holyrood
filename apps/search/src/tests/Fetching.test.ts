import { fetchAllARScenes } from "../fetching/FetchAr";
import { fetchAllArticles } from "../fetching/FetchArticles";
import { fetchAllCategories } from "../fetching/FetchCategories";
import { fetchAllTags } from "../fetching/FetchTags";
import axiosInstance from "../utils/Axios";

jest.mock("../utils/Axios", () => ({
  get: jest.fn(),
}));

// Fetch AR Scenes Tests
describe("fetchAllARScenes", () => {
  it("should fetch AR scenes successfully", async () => {
    // Mock the response data from the API
    const responseData = {
      data: [
        { id: 1, name: "Scene 1" },
        { id: 2, name: "Scene 2" },
      ],
    };

    // Mock the resolved promise for axiosInstance.get
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: responseData,
    });

    // Call the function under test
    const client = {};
    const scenes = await fetchAllARScenes(client);

    // Assert the result
    expect(scenes).toEqual(responseData.data);

    // Assert that axiosInstance.get was called with the correct URL and query parameters
    expect(axiosInstance.get).toHaveBeenCalledWith("/ars?populate=deep");
  });

  it("should handle errors and return an empty array", async () => {
    // Mock the rejected promise for axiosInstance.get
    const error = new Error("Failed to fetch ar scenes");
    (axiosInstance.get as jest.Mock).mockRejectedValueOnce(error);

    // Call the function under test
    const scenes = await fetchAllARScenes({});

    // Assert the result
    expect(scenes).toEqual([]);

    // Assert that axiosInstance.get was called with the correct URL and query parameters
    expect(axiosInstance.get).toHaveBeenCalledWith("/ars?populate=deep");
  });
});

// Fetch Articles Tests
describe("fetchAllArticles", () => {
  it("should fetch articles successfully", async () => {
    // Mock the response data from the API
    const responseData = {
      data: [
        { id: 1, title: "Article 1" },
        { id: 2, title: "Article 2" },
      ],
    };

    // Mock the resolved promise for axiosInstance.get
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: responseData,
    });

    // Call the function under test
    const client = {};
    const articles = await fetchAllArticles(client);

    // Assert the result
    expect(articles).toEqual(responseData.data);

    // Assert that axiosInstance.get was called with the correct URL and query parameters
    expect(axiosInstance.get).toHaveBeenCalledWith("/articles?populate=deep");
  });

  it("should handle errors and return an empty array", async () => {
    // Mock the rejected promise for axiosInstance.get
    const error = new Error("Failed to fetch articles");
    (axiosInstance.get as jest.Mock).mockRejectedValueOnce(error);

    // Call the function under test
    const articles = await fetchAllArticles({});

    // Assert the result
    expect(articles).toEqual([]);

    // Assert that axiosInstance.get was called with the correct URL and query parameters
    expect(axiosInstance.get).toHaveBeenCalledWith("/articles?populate=deep");
  });
});

// Fetch Categories Tests
describe("fetchAllCategories", () => {
  it("should fetch categories successfully", async () => {
    // Mock the response data from the API
    const responseData = {
      data: [
        { id: 1, name: "Category 1" },
        { id: 2, name: "Category 2" },
      ],
    };

    // Mock the resolved promise for axiosInstance.get
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: responseData,
    });

    // Call the function under test
    const categories = await fetchAllCategories({});

    // Assert the result
    expect(categories).toEqual(responseData.data);

    // Assert that axiosInstance.get was called with the correct URL and query parameters
    expect(axiosInstance.get).toHaveBeenCalledWith("/categories?populate=deep");
  });

  it("should handle errors and return an empty array", async () => {
    // Mock the rejected promise for axiosInstance.get
    const error = new Error("Failed to fetch categories");
    (axiosInstance.get as jest.Mock).mockRejectedValueOnce(error);

    // Call the function under test
    const categories = await fetchAllCategories({});

    // Assert the result
    expect(categories).toEqual([]);

    // Assert that axiosInstance.get was called with the correct URL and query parameters
    expect(axiosInstance.get).toHaveBeenCalledWith("/categories?populate=deep");
  });
});

// Fetch Tags Tests
describe("fetchAllTags", () => {
  it("should fetch tags successfully", async () => {
    // Mock the response data from the API
    const responseData = {
      data: [
        { id: 1, name: "Category 1" },
        { id: 2, name: "Category 2" },
      ],
    };

    // Mock the resolved promise for axiosInstance.get
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: responseData,
    });

    // Call the function under test
    const tags = await fetchAllTags({});

    // Assert the result
    expect(tags).toEqual(responseData.data);

    // Assert that axiosInstance.get was called with the correct URL and query parameters
    expect(axiosInstance.get).toHaveBeenCalledWith("/tags?populate=deep");
  });

  it("should handle errors and return an empty array", async () => {
    // Mock the rejected promise for axiosInstance.get
    const error = new Error("Failed to fetch tags");
    (axiosInstance.get as jest.Mock).mockRejectedValueOnce(error);

    // Call the function under test
    const tags = await fetchAllTags({});

    // Assert the result
    expect(tags).toEqual([]);

    // Assert that axiosInstance.get was called with the correct URL and query parameters
    expect(axiosInstance.get).toHaveBeenCalledWith("/tags?populate=deep");
  });
});
