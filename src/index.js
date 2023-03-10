import './index.html';
import './index.css';

import instantsearch from "instantsearch.js";
import algoliasearch from "algoliasearch";

const searchClient = algoliasearch("WOLWACOH2E", "bcd3a4635aa65c98a22bf4db14d73097");
const index = searchClient.initIndex('crawler_Crawler_lab');

const search = instantsearch({
    appId: process.env.APP_ID,
    apiKey: process.env.API_READ_ONLY_KEY,
    indexName: process.env.INDEX_NAME,
    searchClient
});

search.start();
console.log(search);