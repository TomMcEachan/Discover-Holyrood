import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

export const searchClient = instantMeiliSearch(
    `${process.env.NEXT_PUBLIC_SEARCH_URL}`,
    `${process.env.NEXT_PUBLIC_SEARCH_KEY}`,
    {
        primaryKey: "id",
        keepZeroFacets: true,
    },
);
