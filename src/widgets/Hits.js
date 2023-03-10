import { hits } from 'instantsearch.js/es/widgets';

const Hits =  hits({
        container: '#hits',
        templates: {
            item: data => `
                <img class="hit_thumbnail" src=${data.thumbnail} />
                <div>
                    <div class="hit_title">
                        <h4>${data._highlightResult.title.value}</h4>
                    </div>
                    <p>${data._highlightResult.description.value}</p>
                </div>
            `,
            empty: `<h1>Nothing found. Please consider another search</h1>`
        }
      });

export default Hits;