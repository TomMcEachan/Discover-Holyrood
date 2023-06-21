export default ({ env }) => ({
  meilisearch: {
    host: env("MEILISEARCH_HOST"),
    api_key: env("MEILI_MASTER_KEY"),
    config: {
      article: {
        indexName: "all",
        settings: {
          filterableAttributes: ["content_type", "categories", "tags"],
        },
      },
      ar: {
        indexName: "all",
        settings: {
          filterableAttributes: ["content_type", "categories", "tags"],
        },
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          asset_folder: "Discover Holyrood",
          resource_type: "auto",
        },
        uploadStream: {},
        delete: {},
      },
    },
  },
  documentation: {
    enabled: true,
  },
});
