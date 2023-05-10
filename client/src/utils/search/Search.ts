import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

export const searchClient = instantMeiliSearch(
    `https://discoverholyroodmeilisearch.azurewebsites.net`,
    `Zz6TrxJXXlNCyc9FFiGNfnkQATdm4oXBbhFGf9mHGo4`,
    {
        primaryKey: "id",
        keepZeroFacets: true,
    },
);
