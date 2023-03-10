import algoliasearch from "algoliasearch";

const client = algoliasearch("WOLWACOH2E", "bcd3a4635aa65c98a22bf4db14d73097");
const index = client.initIndex('crawler_Crawler_lab');

index
  .search("Fo")
  .then(({ hits, hitsPerPage, nbPages }) => {
    console.log(hitsPerPage, nbPages);
  })
  .catch(err => {
    console.log(err);
  });