import algoliasearch from "algoliasearch";

export const searchClient = algoliasearch(
    "WOLWACOH2E",
    "bcd3a4635aa65c98a22bf4db14d73097"
);

export const index = searchClient.initIndex('crawler_Crawler_lab');