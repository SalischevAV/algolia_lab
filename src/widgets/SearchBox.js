import { searchBox } from 'instantsearch.js/es/widgets';

const SearchBox =  searchBox({
        container: '#searchbox',
        placeholder: 'Search in algolia blog',
    });

export default SearchBox;