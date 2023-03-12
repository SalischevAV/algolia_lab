import { hits } from 'instantsearch.js/es/widgets';

const Hits = (containerName = '', hitCardTemplate, emptyQueryMessage = '') => hits({
    container: `#${containerName}`,
    templates: {
        item: data => hitCardTemplate(data),
        empty: emptyQueryMessage,
    }
})

export default Hits;
