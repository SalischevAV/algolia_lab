import instantsearch from 'instantsearch.js';
import { searchClient } from './searchClient';



export const search = instantsearch({
    appId: process.env.APP_ID,
    apiKey: process.env.API_READ_ONLY_KEY,
    indexName: process.env.INDEX_NAME,
    searchClient
}); 

