import {
    hits
} from 'instantsearch.js/es/widgets';

const Hits = hits({
    container: '#hits',
    templates: {
        item: data => `
                <div class="hit_item">
                    <div class="hit_content">
                        <img class="hit_thumbnail" src=${data.thumbnail} />
                
                        <div class="hit_title">
                            <h4>${data._highlightResult.title.value}</h4>
                        </div>
                        <div class="hit_description">${data._highlightResult.description.value}</div>
                    </div>
                    <div class="hit_credentials">
                            <p class="hit_author">${data.author}</p>
                            <a href=${data.source_URL} class="hit_url">Read more</a>  
                    </div>
                </div>
            `,
        empty: `<h1>Nothing found. Please consider another search</h1>`
    }
});

export default Hits;