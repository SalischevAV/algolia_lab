import { configure } from 'instantsearch.js/es/widgets';

const Configure = (props) => configure({
        hitsPerPage: props.hitsPerPage,
    });

export default Configure;